'user strict';

module.exports = class {
  constructor(
    id = null,
    userName,
    passCode,
    firstName,
    middleName,
    lastName,
    email,
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
    this.email = email;
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

  //   get userName() {
  //     return this.userName;
  //   }
  //   set userName(userName) {
  //     this.userName = userName;
  //   }
  //   get fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   get dateOfBirth() {
  //     return this.dob;
  //   }
  //   get emailAddress() {
  //     return this.email;
  //   }
  //   set emailAddress(email) {
  //     this.email = email;
  //   }
  //   get userCustomerServiceList() {
  //     return this.userCustomerServiceList;
  //   }
  //   set userCustomerServiceList(userCustomerServiceList) {
  //     this.userCustomerServiceList = userCustomerServiceList;
  //   }
  //   set firstName(firstName) {
  //     this.firstName = firstName;
  //   }
  //   set lastName(lastName) {
  //     this.lastName = lastName;
  //   }
};
