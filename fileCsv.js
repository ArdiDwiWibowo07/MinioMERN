
var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
});

// Cek bucket
minioClient.bucketExists('filecsv',function(err, exists){
    if (err) {
        return console.log(e)
      }
      if (exists) {
          console.log("Bucket exists.")
      }
})

// Get a full object.
minioClient.fGetObject('filecsv', 'Electric_Vehicle_Population.csv', 'pbd/Electric_Vehicle_Population.csv', function(e) {
    if (e) {
      return console.log(e) 
    }
    console.log('done')
  })

  


