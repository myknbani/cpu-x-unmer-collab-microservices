---
layout: two-cols
---

# Shared database pattern

- some consider this an _antipattern_
  - but it's more of a [valid pattern with drawbacks][1]

<img
  alt="shared db"
  src="https://miro.medium.com/max/1400/1*J-_vXz4MXiUGufVCWYXkaw.png"
  style="height: 320px"
/>

[1]: https://microservices.io/patterns/data/shared-database.html

::right::

### Drawbacks

- Development time coupling
- Runtime coupling
- Single database may not be _"one-size-fits-all"_
- different libraries deal with databases differently
  * Migrations and migration tables
    * <logos-knex /> Knex.js?, <logos-prisma /> Prisma, <logos-go /> DBMate?
      ![knex](https://miro.medium.com/max/1100/1*1dgobJDXXzzQec6MvsX0HA.png)
  * Metadata from ORMs, ODMs
    * <logos-mongodb-icon /> Mongoose's `__v`
    * <logos-hibernate /> Hibernate/JPA locks