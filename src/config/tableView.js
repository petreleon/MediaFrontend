var MainTableFields = ["UsageClass", "CheckoutType", "MaterialType", "CheckoutYear", "CheckoutMonth", "Checkouts", "Title", "Creator", "Subjects", "Publisher", "PublicationYear"]
var PublisherTableFields = ["title", 'year'];
//var PublishersTableFields = ["Publisher", 'minPublicationYear', 'maxPublicationYear', 'count'];
var PublishersTableFields = [
  { key: 'Publisher', label: 'Publisher' },
  { key: 'minPublicationYear', label: 'Min Publication Year'},
  { key: 'maxPublicationYear', label: 'Max Publication Year' },
  { key: 'count', label: 'Publications' },
  { key: 'actions', label: 'details' }
];

export { MainTableFields, PublisherTableFields, PublishersTableFields };