using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCChallenge.Entities
{
    public class Doctor
    {
        [Key]
        public Guid Id { get; set; }

        [Column(TypeName = "varchar(254)")]
        public string Name { get; set; }

        [Column(TypeName = "varchar(6)")]
        public string Crm { get; set; }

        [Column(TypeName = "varchar(9)")]
        public string CrmUf { get; set; }
    }
}
