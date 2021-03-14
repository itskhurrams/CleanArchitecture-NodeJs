'user strict';

module.exports = class {
  constructor(
    id = null,
    customerId,
    businessTypeId,
    serviceName,
    serviceDescription,
    logoFileUrl,
    isDefault,
    isActive,
    createdBy,
    createdDate,
    updatedBy,
    updatedDate
  ) {
    this.id = id;
    this.customerId = customerId;
    this.businessTypeId = businessTypeId;
    this.serviceName = serviceName;
    this.serviceDescription = serviceDescription;
    this.logoFileUrl = logoFileUrl;
    this.isDefault = isDefault;
    this.isActive = isActive;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.updatedBy = updatedBy;
    this.updatedDate = updatedDate;
  }
};
