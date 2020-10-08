exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("order").del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("order").insert([
        { organizationName: "Nepal unicef", organizationWebsite: "www.kathmandunepal.com", contactName: "Super Man", soapBarNum: 900, contactPhone: 1234567890, contactEmail: "kathmandu@nepal.com", address: "1234 king's st, Kathmandu", country: "Nepal", beneficiariesNum: "150", hygieneSituation: "Excellent", hygieneInitiative: "distribution of soap in rural villages", comments: "No Comment" },
        { organizationName: "Cambodia unicef", organizationWebsite: "www.Phnompenhcambodia.com", contactName: "Spider Man", soapBarNum: 670, contactPhone: 9876543212, contactEmail: "phompenh@cambodia.com", address: "95 st 286, Phnom Penh", country: "Cambodia", beneficiariesNum: "200", hygieneSituation: "Excellent", hygieneInitiative: "distribution of soap in rural villages", comments: "No Comment"  },
        { organizationName: "Kenya unicef", organizationWebsite: "www.nairobikenya.com", contactName: "Iron Man", soapBarNum: 850, contactPhone: 0987654323, contactEmail: "nairobi@kenya.com", address: "5 upper hill Rd, Nairobi", country: "Kenya", beneficiariesNum: "300", hygieneSituation: "Excellent", hygieneInitiative: "distribution of soap in rural villages", comments: "No Comment"  },
        { organizationName: "South Africa unicef", organizationWebsite: "www.capetownsouthafrica.com", contactName: "Ant Man", soapBarNum: 890, contactPhone: 4893546738, contactEmail: "capetown@southafrica.com", address: "62 Newmarket St, Foreshore, Cape Town", country: "South Africa", beneficiariesNum: "999", hygieneSituation: "Excellent", hygieneInitiative: "distribution of soap in rural villages", comments: "No Comment"  },
        { organizationName: "Tanzania unicef", organizationWebsite: "www.dodomatanzania.com", contactName: "Flash Man", soapBarNum: 500, contactPhone: 5568974123, contactEmail: "dodoma@tanzania.com", address: "89 Mwangaza ave, Dodoma", country: "Tanzania", beneficiariesNum: "50", hygieneSituation: "Excellent", hygieneInitiative: "distribution of soap in rural villages", comments: "No Comment"  },
      ])
    });
};












// const faker = require('faker');

// const profiles = [...new Array(5)].map((i, idx) => ({
//   id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
//   avatarUrl: faker.image.avatar(),
//   email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
//   name:
//     idx === 0
//       ? 'Test001 User'
//       : `${faker.name.firstName()} ${faker.name.lastName()}`,
// }));

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex('profiles')
//     .del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('profiles').insert(profiles);
//     });
// };
