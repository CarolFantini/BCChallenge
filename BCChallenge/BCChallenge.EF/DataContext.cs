using BCChallenge.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace BCChallenge.EF
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=127.0.0.1;Database=BCChallenge;Username=carol_fantini;Password=admin");

        public DbSet<Doctor> doctors { get; set; }
        public DbSet<Patient> patients { get; set; }
    }
}
