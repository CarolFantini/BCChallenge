// <auto-generated />
using System;
using BCChallenge.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace BCChallenge.EF.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("BCChallenge.Entities.Doctor", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Crm")
                        .HasColumnType("varchar(6)");

                    b.Property<string>("CrmUf")
                        .HasColumnType("varchar(9)");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(254)");

                    b.HasKey("Id");

                    b.ToTable("doctors");
                });

            modelBuilder.Entity("BCChallenge.Entities.Patient", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("BirthDate")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("CPF")
                        .HasColumnType("varchar(11)");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(254)");

                    b.Property<Guid?>("doctorId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("doctorId");

                    b.ToTable("patients");
                });

            modelBuilder.Entity("BCChallenge.Entities.Patient", b =>
                {
                    b.HasOne("BCChallenge.Entities.Doctor", "doctor")
                        .WithMany()
                        .HasForeignKey("doctorId");

                    b.Navigation("doctor");
                });
#pragma warning restore 612, 618
        }
    }
}
