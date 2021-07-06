using BCChallenge.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BCChallenge.DTOs
{
    public class PatientDTO
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string BirthDate { get; set; }

        public string CPF { get; set; }

        public string doctor { get; set; }
    }
}
