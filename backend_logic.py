"""
ETHIO-HEALTH: CLINICAL LOGIC ENGINE
Author: Bereket Demeke
Purpose: To handle precise medical calculations for the EthioHealth suite.
"""

import math

class HealthCalculator:
    def __init__(self, name, weight_kg, height_m, age):
        self.name = name
        self.weight = weight_kg
        self.height = height_m
        self.age = age

    def calculate_bmi(self):
        """Calculates Body Mass Index and provides status."""
        bmi = self.weight / (self.height ** 2)
        
        if bmi < 18.5:
            status = "Underweight"
            advice = "Focus on nutrient-dense foods and strength building."
        elif 18.5 <= bmi < 25:
            status = "Healthy weight"
            advice = "Excellent! Maintain your current balanced lifestyle."
        elif 25 <= bmi < 30:
            status = "Overweight"
            advice = "Focus on metabolic health and consistent movement."
        else:
            status = "Obese"
            advice = "Consider a guided plan for cardiovascular health."
            
        return {
            "value": round(bmi, 1),
            "status": status,
            "advice": advice
        }

    def daily_water_intake(self):
        """Calculates recommended water intake in liters based on weight."""
        # Standard formula: 0.033 liters per kg of body weight
        liters = self.weight * 0.033
        return round(liters, 2)

    def generate_report(self):
        """Prints a professional summary for the user."""
        bmi_data = self.calculate_bmi()
        water = self.daily_water_intake()
        
        print(f"--- EthioHealth Clinical Report for {self.name} ---")
        print(f"Age: {self.age}")
        print(f"BMI Score: {bmi_data['value']} ({bmi_data['status']})")
        print(f"Recommendation: {bmi_data['advice']}")
        print(f"Recommended Daily Water: {water} Liters")
        print("-" * 45)

# --- EXAMPLE USAGE (For INSA Demo) ---
if __name__ == "__main__":
    # Example: A 22-year-old student weighing 70kg at 1.75m height
    user_data = HealthCalculator(name="Bereket", weight_kg=70, height_m=1.75, age=22)
    user_data.generate_report()
