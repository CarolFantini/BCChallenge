using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCChallenge.Entities
{
    public class Patient
    {
        [Key]
        public Guid Id { get; set; }

        [Column(TypeName = "varchar(254)")]
        public string Name { get; set; }

        [Column(TypeName = "varchar(20)")]
        public DateTime BirthDate { get; set; }

        [Column(TypeName = "varchar(11)")]
        public string CPF { get; set; }

        public Doctor doctor { get; set; }
    }
}
