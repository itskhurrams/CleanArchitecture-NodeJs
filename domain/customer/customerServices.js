'user strict';

module.exports = class {
  constructor(
    id = null,
    customerId,
    serviceName,
    serviceDescription,
    logoFile,
    isDefault,
    isActive,
    createdBy,
    createdDate,
    updatedBy,
    updatedDate
  ) {
    this.id = id;
    this.customerId = customerId;
    this.serviceName = serviceName;
    this.serviceDescription = serviceDescription;
    this.logoFile = logoFile;
    this.isDefault = isDefault;
    this.isActive = isActive;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.updatedBy = updatedBy;
    this.updatedDate = updatedDate;
  }
};
