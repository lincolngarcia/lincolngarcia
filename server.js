export default function (req, res, next) {
  console.log(req.url)
  switch (req.url) {
    case '/admin/success': 
    console.log('attempted user login')
    
    break;
  }
  next()
}