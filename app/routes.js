//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

const version = "v2";
router.get("/", function (req, res) {
  res.redirect("/index");
});

// Temporary Routing for the Digital Identity Provider Onboarding, full journey will be fleshed out
router.get(
  "/" + version + "/idsp-onboarding/ofdia-dashboard",
  function (req, res) {
    res.redirect("/" + version + "/idsp-onboarding/ofdia-dashboard/start");
  }
);
