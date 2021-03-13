'user strict';

module.exports = class {
  constructor(id = null, businessTypeTitle, businessTypeDescription, isActive) {
    this.id = id;
    this.businessTypeTitle = businessTypeTitle;
    this.businessTypeDescription = businessTypeDescription;
    this.isActive = isActive;
  }
};
