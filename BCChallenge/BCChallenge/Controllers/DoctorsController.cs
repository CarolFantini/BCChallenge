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
    public class DoctorsController : ControllerBase
    {
        private readonly DataContext _context;

        public DoctorsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Doctor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> GetDoctors()
        {
            return await _context.doctors.ToListAsync();
        }

        // GET api/Doctor/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Doctor>> GetDoctor(Guid id)
        {
            var doctor = await _context.doctors.FindAsync(id);

            if (doctor == null)
            {
                return NotFound();
            }

            return doctor;
        }

        // POST api/Doctor
        [HttpPost]
        public async Task<IActionResult> PostDoctor(DoctorDTO doctor)
        {
            Doctor doct = new Doctor()
            {
                Id = new Guid(),
                Name = doctor.Name,
                Crm = doctor.Crm,
                CrmUf = doctor.CrmUf,
            };

            var doc = _context.doctors.Where(x => x.Crm.Equals(doct.Crm) && x.CrmUf.Equals(doct.CrmUf)).FirstOrDefault();

            if (doc == null)
            {
                _context.doctors.Add(doct);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return StatusCode(409);
            }
        }

        // PUT: api/Doctor/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctor(Guid id, Doctor doctor)
        {
            if (!doctor.Id.Equals(id))
            {
                return BadRequest();
            }

            _context.Entry(doctor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoctorExists(id))
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

        // DELETE api/Doctor/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctor(Guid id)
        {
            var doctor = await _context.doctors.FindAsync(id);
            // Para saber se o médico tem algum paciente associado.
            var patients = _context.patients.Where(x => x.doctor.Id.Equals(id)).Any();

            if (doctor == null)
            {
                return NotFound();
            }

            if (patients)
            {
                return StatusCode(405);
            }
            else
            {
                _context.doctors.Remove(doctor);
                await _context.SaveChangesAsync();
                return NoContent();
            }
        }

        [HttpGet("list-patients-doctors/{id}")]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatientsFromDoctors(Guid id)
        {
            return await _context.patients.Where(x => x.doctor.Id.Equals(id)).Include(x => x.doctor).ToListAsync();
        }

        private bool DoctorExists(Guid id)
        {
            return _context.doctors.Any(e => e.Id.Equals(id));
        }
    }
}
