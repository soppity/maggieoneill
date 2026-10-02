// Booking and cancellation policy, supplied by the owner (October 2026). Keep the wording as given.
// Shown in full on /booking-terms/ and summarised in room page FAQs.

export const bookingTermsPath = '/booking-terms/';

export const cancellationSummary =
  "A standard booking (one room for one day) is free to cancel or change up to 1 business day before your start time. After that, the full booking cost is payable. Larger bookings are fully chargeable once booked, with a 25% deposit to secure your dates.";

export const standard = {
  definition: 'A standard booking is one room for one day.',
  points: [
    'Free to cancel or change up to 1 business day before your start time. Business days are Monday to Friday, excluding bank holidays. For example, a Wednesday 2pm booking can be changed for free until Tuesday 2pm. A Monday 10am booking can be changed until 10am the Friday before.',
    'After that, the full booking cost is payable. This applies whether you cancel, move to another date, shorten your booking or switch to a smaller room.',
    'No-shows are charged in full.',
  ],
};

export const larger = {
  definition: 'A larger booking is more than one room, more than one day, the Auditorium, or a staffed event.',
  chargeable:
    'Larger bookings are fully chargeable once booked. If you cancel, the full cost is payable. The same applies if you reduce the number of rooms, days or hours.',
  payment: [
    "25% deposit to secure your dates. We'll invoice you when you book. Please pay within 5 business days, or we may release the dates. The deposit is non-refundable.",
    'The balance is invoiced 2 weeks before your first booking date.',
    "Booking less than 2 weeks ahead? We'll invoice the full amount when you book.",
  ],
  paymentMethods:
    'You can pay by bank transfer (details on your invoice) or by card over the phone. PO numbers are welcome, but we still need the deposit to secure your dates.',
  reschedule:
    "You can move a larger booking once, as long as you tell us at least 2 weeks before the original date. The new date needs to be within 6 months. What you've paid moves with you. If the new date costs more, you pay the difference. If it costs less, the original price stands. Changes after that, or with less than 2 weeks' notice, count as a cancellation.",
};

export const weekly = [
  'If you book the same room every week and each session stands alone, each date is treated as its own standard booking. Cancelling one week doesn’t affect the others.',
  'If your dates make up one course or programme, the whole course counts as one larger booking.',
];

export const extras = 'AV and other extras follow the same rules as the room they’re booked with.';

export const exceptional =
  "We understand plans change. If something genuinely unexpected happens, talk to us. We'll look at exceptional circumstances case by case.";

export const why = [
  "The Maggie O'Neill Centre is run by a charity. Room hire income helps fund Maggie's Meals and our community programmes.",
  'When we hold a room for you, we turn other bookings away. A late cancellation usually means the room sits empty, and the community work loses out.',
];
