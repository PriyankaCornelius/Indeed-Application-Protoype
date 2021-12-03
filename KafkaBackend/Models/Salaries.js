const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SalariesSchema = new Schema(
  {
    applicantId: { type: Number, required: true },
    applicantName: { type: String, required: true },
    companyName: { type: String, required: true },
    isCurrent: { type: Boolean, required: false },
    endDate: { type: Timestamp, required: true },
    jobTitle: { type: String, required: true },
    location: { type: String, required: false },
    salary: { type: Double, required: true },
    yearsOfExperience: { type: Double, required: false },
    isPaidTimeOff: { type: Boolean, required: false },
    isHealthInsurance: { type: Boolean, required: false },
    isDentalVisionInsurance: { type: Boolean, required: false },
    isRetirement401k: { type: Boolean, required: false },
    otherBenefits: { type: String, required: false },
    createdAt: { type: Date, required: true },
    modifiedAt: { type: Date, required: false },
  },
  {
    versionKey: false,
  }
);

const Salaries = mongoose.model("salary", SalariesSchema);
module.exports = Salaries;
