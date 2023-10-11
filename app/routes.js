//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

const version = 'v1';

router.get('/', function(req, res){
    res.redirect('/'+version+'/public-facing-register/start');
});
router.get('/'+version, function(req, res){
    res.redirect('/'+version+'/public-facing-register/start');
});

router.get('/search', function(req, res){
    res.redirect('/'+version+'/public-facing-register/search');
});

router.get('/company1', function(req, res){
    res.redirect('/'+version+'/public-facing-register/company1');
});


// Temporary Routing for the IDSP Onboarding, full journey will be fleshed out
router.get('/'+version+'/idsp-onboarding', function(req, res){
    res.redirect('/'+version+'/idsp-onboarding/application-portal/start');
});