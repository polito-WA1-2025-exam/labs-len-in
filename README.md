# Group "Len.in()"

## Members
- s339485 FERRARI FEDERICO
- s345789 GIULIANI ADRIANO


# Exercise "Rescuing surplus food"
Design and implement a web application for rescuing surplus food. The application will enable users
to purchase surplus food from stores and restaurants at discounted prices, reducing food waste, as in
“Too Good To Go”. For that purpose, the application must meet the following requirements.

In the application, the surplus food items are packaged into “bags”, and there are two types of bags:
“surprise bags”, which are bags filled with assorted surplus food items from a store or restaurant
without knowing the exact contents beforehand, and “regular bags” in which the food items and
their quantity can be known (for instance: 2 apples, 1 banana).

On the website's main page, accessible without authentication, it is possible to view a list of
establishments (stores and restaurants) participating in the surplus food program. This list of stores
and restaurants must be displayed alphabetically, showing their name, address, phone number, and
type of cuisine or food category.

After logging in, users see the list of available bags from the restaurants/stores and they can reserve
one or more bags by selecting the desired quantity and size. There are three possible sizes: small,
medium, and large. Each bag is displayed by showing its type (surprise, regular), its content (only if
regular), its price, its size, its establishment, and a time range for picking up. Only future time ranges
are enabled. For instance, users cannot select a bag with a pick-up time from 10 AM to 11 AM of the
current day if it is 6 PM, but they can select pick-up time from 10 AM to 11 AM of the next days.

After a user sets apart a bag, it appears in their shopping cart. Once they've completed their
selections, they proceed to confirm their choices. If the bag is a regular bag, users can view a detailed
list of food items and their quantities. Within this bag type, users can remove a maximum of two
food items. Notably, even if users choose to remove items from the bag, the overall price of the bag
remains unaltered. For surprise bags, users can only add or remove the entire bag from the shopping
cart without the option to see or modify its contents. Additionally, users should be able to textually
specify allergies or special requests.

The system manages two states for each bag:
+ Available: Indicates bags ready for reservation.
+ Reserved: Designates a bag that other users have chosen and confirmed in their shopping carts (reserved).

Each authenticated user can add to the shopping cart just one bag per establishment within the
same day to ensure fairness and allow more users to benefit from the program. Consequently, if the
user takes a bag out of the shopping cart, they regain the ability to add a different bag from that
same establishment. Additionally, the payment is made at the time of order pickup, the system does
not need to handle the pickup process. However, after the user confirms its choices in the shopping
cart, the app must update the inventory accordingly. Similarly, an authenticated user should be able
to visualize how many bags are available and reserved.

Upon confirming the shopping cart, the selected bags are reserved for the user if they are still
available (considering that other registered users may request the same items simultaneously).
However, if any selected items are no longer available, the whole reservation will be canceled. In this
case, the app will highlight the unavailable bags on the interface for 5 seconds to indicate the reason
for cancellation. If, upon confirmation, all selected bags are still available, they will be immediately
marked as reserved.

Moreover, authenticated users have the option to delete their own reservations, releasing all the
items reserved by them. Deleting a reservation makes these items available again for all users, and
the app interface will update to reflect these changes.

The organization of these specifications in different screens (and possibly on different routes) is left
to the student.

# Lab Journal

(you may update this file to keep track of the progress of your group work, throughout the weeks)

https://elite.polito.it/teaching/01txy-wa1/schedule
