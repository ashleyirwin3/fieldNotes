
exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        knex('notes').insert({
          siteLocality: 'West Harpeth',
          fieldNo: '20',
          date: 'March 3, 2017',
          wp: '300',
          startTime: '12:00',
          stopTime: '3:00',
          surveyors: 'Kristin Irwin, Jerry Brown',
          coordinates: '50, 150',
          underwaterVis: '40',
          widthMin: '10',
          widthMax: '20',
          widthAvg: '15',
          depthMin: '10',
          depthMax: '20',
          depthAvg: '15',
          channelRipStr: 'moderate',
          sBankErosion: 'moderate',
          notableFeats: 'This site had a significant amout of wildlife',
          weather: 'overcast',
          sand: 'good',
          gravel: 'good',
          cobble: 'good',
          boulder: 'good',
          bedrock: 'good',
          detritus: 'none',
          notes: 'weather was fair, 3 specimens found'
        })
      ])
   });
};
