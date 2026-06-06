# Weather Dashboard

A modern, fully-featured weather dashboard that fetches real-time weather data from OpenWeatherMap API. Get current weather, 5-day forecasts, hourly updates, and more!

## 🌤️ Features

### Current Weather Display
- Real-time temperature with weather conditions
- "Feels like" temperature
- Weather icons and descriptions
- Current date and time

### Detailed Weather Information
- Humidity levels
- Wind speed
- Air pressure
- Visibility
- UV Index
- Cloud coverage

### Forecast Views
- **5-Day Forecast**: Daily weather predictions with temperatures and conditions
- **Hourly Forecast**: 12-hour detailed hourly breakdown

### Search & Location Features
- 🔍 Search by city name with autocomplete suggestions
- 📍 Geolocation-based weather (one-click current location)
- 💾 Favorites/Saved locations
- 📋 Recent searches history

### Temperature Toggle
- Switch between Celsius and Fahrenheit
- Temperature persists across views

### Data Persistence
- Save favorite locations
- View recent searches
- Data stored in browser localStorage

### Responsive Design
- Works on desktop, tablet, and mobile
- Beautiful gradient UI
- Smooth animations and transitions

## 🚀 Getting Started

### 1. Get Your Free API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your free API key
4. The free tier includes:
   - Current weather data
   - 5-day forecasts
   - Hourly data
   - No credit card required

### 2. Add Your API Key

1. Open `weather-dashboard-script.js`
2. Find line 9: `const OPENWEATHER_API_KEY = 'YOUR_API_KEY_HERE';`
3. Replace `'YOUR_API_KEY_HERE'` with your actual API key

```javascript
const OPENWEATHER_API_KEY = 'your_actual_key_here';
```

### 3. Link Files in Your HTML

Make sure your HTML file links to the correct CSS and JS files:

```html
<link rel="stylesheet" href="weather-dashboard-styles.css">
<script src="weather-dashboard-script.js"></script>
```

## 📁 Project Files

```
weather-dashboard/
├── weather-dashboard.html       # Main HTML
├── weather-dashboard-styles.css # Styling
├── weather-dashboard-script.js  # JavaScript logic
└── README.md                     # This file
```

## 🎨 UI Components

### Search Bar
- Type city name to see suggestions
- Press Enter or click Search button
- Click location button for current location

### Weather Cards
- **Current Weather**: Large card with main conditions
- **Forecast Cards**: Individual daily forecasts
- **Hourly Cards**: Hourly temperature and conditions
- **Favorite Items**: Quick access to saved locations
- **Recent Items**: History of searches

### Temperature Display
- Large temperature reading
- Toggle buttons for °C / °F
- All temperatures update when toggling

## 🔧 How It Works

### Data Flow

1. **Search Input** → City name from user
2. **Geocoding API** → Convert city name to coordinates
3. **Weather API** → Fetch weather data using coordinates
4. **Display** → Format and show weather information
5. **Storage** → Save search to localStorage

### API Endpoints Used

- **Geocoding API**: `https://api.openweathermap.org/geo/1.0/direct`
- **Reverse Geocoding**: `https://api.openweathermap.org/geo/1.0/reverse`
- **Weather Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

## 💾 Local Storage

The app saves two things in browser storage:

1. **Favorites**: 
   ```javascript
   {
     city: "London",
     lat: 51.5085,
     lon: -0.1257,
     temp: 15
   }
   ```

2. **Recent Searches**: Array of last 10 searched cities

## 🌍 Features in Detail

### Search with Autocomplete
- Suggestions appear as you type (3+ characters)
- Shows location name with country
- Click to select and load weather

### Temperature Toggle
```javascript
// Click °C or °F button
// All temperatures update instantly
// Affects current, forecast, and hourly views
```

### Favorites Management
- Click star (☆) to save location
- Star fills (★) when location is saved
- Click saved location to view weather again
- Hover and click × to remove favorite

### Geolocation
- Click location button (📍)
- Browser requests permission
- Automatically loads weather for your location
- Adds to recent searches

## 🎯 Color Scheme

- **Primary Blue**: `#4a90e2` - Main accent
- **Secondary Green**: `#50c878` - Positive indicators
- **Accent Orange**: `#ffa500` - Highlights
- **Dark Background**: `#0f1419` - Base color
- **Card Background**: `#1a1f2e` - Card containers

## 📱 Responsive Breakpoints

- **Desktop**: Full grid layout (1200px+)
- **Tablet**: Adjusted grid (768px - 1199px)
- **Mobile**: Single column layout (<768px)
- **Small Mobile**: Optimized spacing (<480px)

## ⚠️ Troubleshooting

### "Invalid API key" Error
- Check that you added your key correctly in line 9
- Verify key is between quotes: `'your_key_here'`
- Ensure no extra spaces

### Suggestions Not Appearing
- Make sure API key is set
- Need at least 3 characters typed
- API requires internet connection

### Location Not Working
- Check browser permissions
- Some browsers require HTTPS for geolocation
- VPN might affect location accuracy

### Weather Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh the page
- Check internet connection
- Verify API key is valid

## 🔐 API Rate Limits

OpenWeatherMap free tier provides:
- **Calls**: 60/minute
- **Daily**: No limit
- **Forecast**: 5-day forecast available
- **Update frequency**: Every 10 minutes

## 🚀 Enhancement Ideas

1. **Additional Information**
   - Sunrise/Sunset times
   - Air quality data
   - Pollen counts

2. **Features**
   - Weather alerts/warnings
   - Multiple unit systems (km/h, mph, m/s)
   - Dark mode toggle
   - Weather comparison between cities

3. **Improvements**
   - Add map view
- Historical weather data
   - Weather trends/charts
   - Share weather data
   - Push notifications

## 📊 Data Points Displayed

- Current temperature
- Feels like temperature
- Weather condition (main)
- Weather description
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility distance
- Cloud percentage
- UV Index level

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal and commercial use.

---

**Enjoy your Weather Dashboard!** ☀️🌧️⛈️

For more information about the API, visit [OpenWeatherMap Documentation](https://openweathermap.org/api)
