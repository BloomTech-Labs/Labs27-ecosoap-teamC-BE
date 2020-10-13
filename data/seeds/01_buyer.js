exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex('buyer')
      .del()
      // .truncate()
      .then(function () {
        // Inserts seed entries
        return knex('buyer').insert([
          {
            email: 'kathmandu@nepal.com',
            password: 'nepal',
            organizationName: 'Nepal unicef',
            organizationWebsite: 'www.kathmandunepal.com',
            contactName: 'Super Man',
            contactPhone: 1234567890,
            address: "1234 king's st, Kathmandu",
            country: 'Nepal',
          },
          {
            email: 'phompenh@cambodia.com',
            password: 'cambodia',
            organizationName: 'Cambodia unicef',
            organizationWebsite: 'www.Phnompenhcambodia.com',
            contactName: 'Spider Man',
            contactPhone: 9876543212,
            address: '95 st 286, Phnom Penh',
            country: 'Cambodia',
          },
          {
            email: 'nairobi@kenya.com',
            password: 'kenya',
            organizationName: 'Kenya unicef',
            organizationWebsite: 'www.nairobikenya.com',
            contactName: 'Iron Man',
            contactPhone: 9087654323,
            address: '5 upper hill Rd, Nairobi',
            country: 'Kenya',
          },
          {
            email: 'capetown@southafrica.com',
            password: 'southafrica',
            organizationName: 'South Africa unicef',
            organizationWebsite: 'www.capetownsouthafrica.com',
            contactName: 'Ant Man',
            contactPhone: 4893546738,
            address: '62 Newmarket St, Foreshore, Cape Town',
            country: 'South Africa',
          },
          {
            email: 'dodoma@tanzania.com',
            password: 'tanzania',
            organizationName: 'Tanzania unicef',
            organizationWebsite: 'www.dodomatanzania.com',
            contactName: 'Flash Man',
            contactPhone: 5568974123,
            address: '89 Mwangaza ave, Dodoma',
            country: 'Tanzania',
          },
        ]);
      })
  );
};
