using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BCChallenge.EF.Migrations
{
    public partial class Release1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "doctors",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "varchar(254)", nullable: true),
                    Crm = table.Column<string>(type: "varchar(6)", nullable: true),
                    CrmUf = table.Column<string>(type: "varchar(9)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_doctors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "patients",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "varchar(254)", nullable: true),
                    BirthDate = table.Column<string>(type: "varchar(20)", nullable: false),
                    CPF = table.Column<string>(type: "varchar(11)", nullable: true),
                    doctorId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_patients_doctors_doctorId",
                        column: x => x.doctorId,
                        principalTable: "doctors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_patients_doctorId",
                table: "patients",
                column: "doctorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "patients");

            migrationBuilder.DropTable(
                name: "doctors");
        }
    }
}
