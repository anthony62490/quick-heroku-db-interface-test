const getData = (req, res, next) =>
{
  const dbInstance = req.app.get('db');
  dbInstance.read_data()
    .then(data => res.status(200).send(data))
    .catch( err => 
      {
        res.status(500).send(`Error in getData(): ${err}`);
        console.log(err);
      }
    );

}

module.exports = 
{
  getData
};