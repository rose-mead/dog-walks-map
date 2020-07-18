

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('walks').del()
    .then(function () {
      // Inserts seed entries
      return knex('walks').insert([
        {
          id: 1, 
          name: 'Lake Kainui', 
          location: 'Horsham Downs', 
          coordinates: '{"lat":-37.677390, "lng":175.236442}',
          time: '60 min', 
          distance: 10,
          difficulty: 'easy', 
          off_leash: 'true',
          description: 'An easy lake loop just north of Hamilton with loads of variety for dogs. This track meanders through stands of native trees and grassed areas. A range of different maimais are dotted around the lake – from ramshackle to quite impressive!'
        },
        {
          id: 2,
          name: 'Yarndleys Bush', 
          location: 'Te Awamutu', 
          coordinates: '{"lat":-37.980695, "lng":175.311316}',
          time: '30-45 min', 
          distance: 5,
          difficulty: 'easy', 
          off_leash: 'true',
          description: 'This easy walk loops through one of the last remnants of kahikatea swamp forest in the region. The boardwalk winds between large kahikatea root buttresses and leads to a viewing platform perched among towering kahikatea (spooky when windy!). Aside from a relatively steep grassed slope on the way to the walk, this adventure suits all abilities.'
        },
        {
          id: 3, 
          name: 'Newstead Walkway', 
          location: 'Newstead', 
          coordinates: '{"lat":-37.769898, "lng":175.356796}',
          time: '60 min', 
          distance: 3,
          difficulty: 'hard', 
          off_leash: 'false',
          description: 'Loads of murky swamps and towering eucalyptus trees to entertain the whole family. In the middle of this walk is a glade surrounded by some of the tallest eucalyptus trees in New Zealand. Plenty of fallen trunks are scattered around the glade for some serious sniffing action.'
        }
      ]);
    });
};
