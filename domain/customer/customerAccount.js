'use strict';

module.exports = class {
  constructor(
    id = null,
    userName,
    passCode,
    customerName,
    isActive,
    createBy,
    createdDate = new Date(),
    updatedBy,
    updatedDate,
    customerServiceList
  ) {
    this.id = id;
    this.userName = userName;
    this.passCode = passCode;
    this.customerName = customerName;
    this.isActive = isActive;
    this.createBy = createBy;
    this.createdDate = createdDate;
    this.updatedBy = updatedBy;
    this.updatedDate = updatedDate;
    this.customerServiceList = customerServiceList;
  }
};
