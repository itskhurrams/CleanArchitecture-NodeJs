'user strict';

module.exports = class {
  constructor(
    id = null,
    userName,
    passCode,
    firstName,
    middleName,
    lastName,
    gender,
    dob,
    cellNumber,
    isActive,
    createdBy,
    createdDate,
    updatedBy,
    updatedDate,
    userCustomerServiceList
  ) {
    this.id = id;
    this.userName = userName;
    this.passCode = passCode;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.gender = gender;
    this.dob = dob;
    this.cellNumber = cellNumber;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.updatedBy = updatedBy;
    this.updatedDate = updatedDate;
    this.userCustomerServiceList = userCustomerServiceList;
    this.isActive = isActive;
  }
};
