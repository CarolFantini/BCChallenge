<h1 align="center">BCChallenge</h1>

### English
Technical challenge developed for a fullstack developer position.

Technologies used: .NET 5, Entity Framework Core 5.0.7, PostgreSQL 13, Angular 12.1 and OpenAPI 3.0.1 (Swagger).

Challenge Description:
- Domain modeling

![Screenshot_2](https://user-images.githubusercontent.com/43019285/124694349-79df7080-deb7-11eb-8be0-f16f96f14020.png)

Requirement 1: List of doctors

Create a screen that lists doctors registered in the system. Each record must have the option to edit and delete.

Requirement 2: Registration of doctors

Create a screen for registering/editing doctors.

Business rule 2.1: The system cannot allow the registration of doctors with CRM requested, and the doctor's CRM is composed of the CRM number and the CRM state (Crm + CrmUf).

Business rule 2.2: All attributes are required.

Requirement 3: Exclusion of doctors

Create doctor exclusion functionality.

Business rule 3.1: It must not be possible to exclude doctors who have linked patients.

Requirement 4: Patient Listing

Create a screen that lists patients registered in the system. Each record must have the option to edit and delete.

Requirement 5: Creating patients

Create a patient creation/editing screen.

Business rule 5.1: All attributes are required.

Business rule 5.2: Every patient must be linked to a doctor.

Business rule 5.3: The system should not allow registration of patients with duplicate CPF.

Business rule 5.4: The system should not allow registration of patients with an invalid CPF.

Requirement 6: Exclusion of patients

Create patient deletion functionality.

Requirement 7: Patient report by doctor

Create a doctor's patient list screen, with option to filter by doctor.

Business Rule 7.1: It should be mandatory to select the physician to filter the report.

Required for API:

Create tables of Doctor and Patient entities using Entity Framework Core using code first and migrations strategy.

Use Entity Framework Core in all database operations.

Differentials:

Documentation of API endpoints;

Mask/Format CPF in patient registration and listing (XXX.XXX.XXX-XX);

Mask/Format CRM in the registration and listing of physicians (123456-SP);

Choose to deliver the test using PostgreSQL.

### Português
Desafio técnico desenvolvido para vaga de desenvolvedor .NET.

Tecnologias usadas: .NET 5, Entity Framework Core 5.0.7, PostgreSQL 13, Angular 12.1 e OpenAPI 3.0.1 (Swagger).

Descrição do Desafio:

![Screenshot_1](https://user-images.githubusercontent.com/43019285/124798309-96b48c00-df29-11eb-999d-bdaf399dcbc0.png)

![Screenshot_3](https://user-images.githubusercontent.com/43019285/124798462-bf3c8600-df29-11eb-97fa-4e84a734a5a7.png)

## License
[GPL v3](https://github.com/CarolFantini/VHChallenge/blob/main/LICENSE)
  
## Author
- LinkedIn: [Carol Fantini](https://linkedin.com/in/carolfantini)
  
- Twitter: [@carol_fantini](https://twitter.com/carol_fantini)
