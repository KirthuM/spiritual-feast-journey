
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CalendarClock, Users, Utensils } from 'lucide-react';

const timeSlots = [
  { id: 'lunch1', time: '12:00 PM', meal: 'Lunch' },
  { id: 'lunch2', time: '1:30 PM', meal: 'Lunch' },
  { id: 'dinner1', time: '7:00 PM', meal: 'Dinner' },
  { id: 'dinner2', time: '8:30 PM', meal: 'Dinner' },
];

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Success toast - in a real app this would submit to a server
    toast({
      title: "Reservation Requested",
      description: `We've received your booking request for ${formData.date} at ${formData.time}. We'll contact you shortly to confirm.`,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
  };

  return (
    <section id="booking" className="section-padding bg-spiritual-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="tag mb-4">Reserve Your Experience</span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Book Your Spiritual Dining Journey
              </h2>
              <p className="text-spiritual-800/80 mb-8">
                Pre-booking ensures we can prepare for your visit with intention and care. While we welcome walk-ins, reserved guests receive priority seating and a personalized experience.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-spiritual-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <CalendarClock className="w-6 h-6 text-spiritual-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Opening Hours</h3>
                    <p className="text-sm text-spiritual-800/80">
                      Lunch: 12:00 PM - 3:00 PM<br />
                      Dinner: 7:00 PM - 10:00 PM<br />
                      Closed on Mondays
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-spiritual-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-spiritual-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Group Bookings</h3>
                    <p className="text-sm text-spiritual-800/80">
                      For groups larger than 8 people, please contact us directly for special arrangements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-spiritual-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Utensils className="w-6 h-6 text-spiritual-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">Special Requests</h3>
                    <p className="text-sm text-spiritual-800/80">
                      If you have dietary restrictions or special requests, please note them in your reservation. We'll do our best to accommodate you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-spiritual-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500 bg-white/50"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-spiritual-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500 bg-white/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-spiritual-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500 bg-white/50"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-1">
                          Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full p-3 border border-spiritual-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500 bg-white/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium mb-1">
                          Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full p-3 border border-spiritual-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500 bg-white/50"
                          required
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.id} value={slot.time}>
                              {slot.time} ({slot.meal})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-1">
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full p-3 border border-spiritual-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500 bg-white/50"
                        required
                      >
                        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Person' : 'People'}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-3 border border-spiritual-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spiritual-500 bg-white/50"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Request Reservation
                  </button>
                  
                  <p className="text-xs text-center text-spiritual-800/60">
                    * We'll contact you to confirm your reservation within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
