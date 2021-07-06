using BCChallenge.DTOs;
using BCChallenge.EF;
using BCChallenge.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BCChallenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly DataContext _context;

        public PatientsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Patient
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {
            return await _context.patients.Include(x => x.doctor).ToListAsync();
        }

        // GET api/Patient/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(Guid id)
        {
            var patient = await _context.patients.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            return patient;
        }

        // POST api/Patient
        // To protect from overposting attacks.
        [HttpPost]
        public async Task<IActionResult> PostPatient(PatientDTO patient)
        {
            Guid idDoctor = new(patient.doctor);

            var doctor = _context.doctors.Where(x => x.Id.Equals(idDoctor)).FirstOrDefault();

            // Checar se já existe paciente com o CPF cadastrado.
            var pat = _context.patients.Where(x => x.CPF.Equals(patient.CPF)).FirstOrDefault();

            if (pat == null)
            {
                // Para converter a string referente a Birth Date
                DateTime dateTime = Convert.ToDateTime(patient.BirthDate);

                Patient pati = new Patient()
                {
                    Id = new Guid(),
                    Name = patient.Name,
                    BirthDate = dateTime,
                    CPF = patient.CPF,
                    doctor = doctor
                };

                _context.patients.Add(pati);
                await _context.SaveChangesAsync();

                // Seria melhor retornar Created
                return Ok();
            }
            else
            {
                return StatusCode(409);
            }
        }

        // PUT: api/Patient/5
        // To protect from overposting attacks.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatient(Guid id, Patient patient)
        {
            if (!patient.Id.Equals(id))
            {
                return BadRequest();
            }

            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE api/Patient/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(Guid id)
        {
            // TO DO: Não pode excluir médico com paciente vinculado
            var patient = await _context.patients.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }
            _context.patients.Remove(patient);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool PatientExists(Guid id)
        {
            return _context.patients.Any(e => e.Id.Equals(id));
        }
    }
}
