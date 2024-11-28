About main dependencies:

- Turborepo
- CASL
- ZOD
- Fastfy

-------------------------
## Features

### Authentication
- [ ] it should be able to authenticate using e-mail $ password;
- [ ] it should be able to authenticate using github account;
- [ ] it should be able to recover password using e-mail;
- [ ] it should be able to create an accout (email, name and password);

### Organizations

- [ ] it should be able to create a new organization;
- [ ] it should be able to get organizations to which the user belongs;
- [ ] it should be able to update an organization;
- [ ] it should be able to shutdown an organization;
- [ ] it should be able to transfer organization ownership;

### Invites

- [ ] it should be able to invite a new member (email, role)
- [ ] it should be able to accept an invite;
- [ ] it should be able to revoke a pending invite;

### Members

- [ ] it should be able to get organization members;
- [ ] it should be able to update a member role;

### Projects

- [ ] it should be able to get projects within a organization;
- [ ] it should be able to create a new project (name, url, description);
- [ ] it should be able to update a project (name, url, description);
- [ ] it should be able to delete a project;

### Billing

- [ ] it should be able to get billing details for organization ($20 per project / $10 per member excluding billing role);

### Roles

- Administrator
- Billing
- Member

### Permissions table

|                              | Administrator | Member | Billing | Anonymous |
|------------------------------|---------------|--------|---------|-----------|
| Update organization          | Y             | N      | N       | N         |
| Delete organization          | Y             | N      | N       | N         |
| Invite a member              | Y             | N      | N       | N         |
| Revoke an Invite             | Y             | N      | N       | N         |
| List members                 | Y             | Y      | Y       | N         |
| Transfer ownership           | M             | N      | N       | N         |
| update members role          | Y             | N      | N       | N         |
| delete a member              | Y             | M      | N       | N         |
| List Projects                | Y             | Y      | Y       | N         |
| Create a new project         | Y             | Y      | N       | N         |
| Update a project             | Y             | M      | N       | N         |
| Delete Project               | Y             | M      | N       | N         |
| Get billing details          | Y             | N      | Y       | N         |
| Export billing details       | Y             | N      | Y       | N         |

=> Y == allowed
=> N == not allowed
=> M == Maybe allowed (conditional)