// weight value is between 0 - 100

const criteria_weight = {
  property_types: {
    weight: 10,
    criteria: [
      {
        id: 1,
        title: '1 Bedroom',
        weight: 20,
      },
      {
        id: 2,
        title: '2 Bedroom',
        weight: 40,
      },
      {
        id: 3,
        title: '3 Bedroom',
        weight: 60,
      },
      {
        id: 4,
        title: '4 Bedroom',
        weight: 80,
      },
      {
        id: 5,
        title: 'Studio',
        weight: 100,
      },
    ],
  },
  property_age: {
    weight: 20,
    criteria: [
      {
        id: 1,
        title: 'Not Applicable',
        weight: 0,
      },
      {
        id: 2,
        title: '1-5 Years',
        weight: 20,
      },
      {
        id: 3,
        title: '6-10 Years',
        weight: 40,
      },
      {
        id: 4,
        title: '11-15 Years',
        weight: 60,
      },
      {
        id: 5,
        title: '16-20 Years',
        weight: 80,
      },
      {
        id: 6,
        title: '21-25 Years',
        weight: 100,
      },
    ],
  },
  credit_history: {
    weight: 30,
    criteria: [
      {
        id: 1,
        title: 'No Credit History',
        weight: 10,
      },
      {
        id: 2,
        title: 'Poor',
        weight: 40,
      },
      {
        id: 3,
        title: 'Fair',
        weight: 60,
      },
      {
        id: 4,
        title: 'Good',
        weight: 70,
      },
      {
        id: 5,
        title: 'Excellent',
        weight: 90,
      },
    ],
  },
  amenities: {
    weight: 40,
    criteria: [
      {
        id: 1,
        title: 'Gym',
      },
      {
        id: 2,
        title: 'Swimming Pool',
      },
      {
        id: 3,
        title: 'Parking',
      },
      {
        id: 4,
        title: 'Playground',
      },
      {
        id: 5,
        title: 'Security',
      },
    ],
  },
  security: {
    weight: 50,
    criteria: [
      {
        id: 1,
        title: 'Not Applicable',
        weight: 10,
      },
      {
        id: 2,
        title: 'Gated Community',
        weight: 30,
      },
      {
        id: 3,
        title: 'Security Guard',
        weight: 70,
      },
    ],
  },
  employment_type: {
    weight: 10,
    criteria: [
      {
        id: 1,
        title: 'Unstable',
        weight: 10,
      },
      {
        id: 2,
        title: 'Temporary',
        weight: 30,
      },
      {
        id: 3,
        title: 'Self Employed',
        weight: 50,
      },
      {
        id: 4,
        title: 'Newly Employed',
        weight: 70,
      },
      {
        id: 5,
        title: 'Stable Employment',
        weight: 90,
      },
    ],
  },
  parking_type: {
    weight: 15,
    criteria: [
      {
        id: 1,
        title: 'No Parking',
        weight: 10,
      },
      {
        id: 2,
        title: 'Nearby Paid Parking',
        weight: 30,
      },
      {
        id: 3,
        title: 'On-Street Parking',
        weight: 50,
      },
      {
        id: 4,
        title: 'Paid Dedicated Parking',
        weight: 70,
      },
      {
        id: 5,
        title: 'Free Dedicated Parking',
        weight: 90,
      },
    ],
  },
  lease_term: {
    weight: 25,
    criteria: [
      {
        id: 1,
        title: 'Month to Month',
        weight: 10,
      },
      {
        id: 2,
        title: '6 Months',
        weight: 30,
      },
      {
        id: 3,
        title: '12 Months no extension',
        weight: 50,
      },
      {
        id: 4,
        title: '12 Months with extension',
        weight: 70,
      },
      {
        id: 5,
        title: 'Multi-Year',
        weight: 90,
      },
    ],
  },
  pets_policy: {
    weight: 25,
    criteria: [
      {
        id: 1,
        title: 'All Pets Allowed',
        weight: 90,
      },
      {
        id: 2,
        title: 'Cats Only',
        weight: 70,
      },
      {
        id: 3,
        title: 'Dogs Only',
        weight: 70,
      },
      {
        id: 4,
        title: 'No Pets Allowed',
        weight: 10,
      },
    ],
  },
  background: {
    weight: 5,
    criteria: [
      {
        id: 1,
        title: 'Negative',
        weight: 10,
      },
      {
        id: 2,
        title: 'Further Review Required',
        weight: 30,
      },
      {
        id: 3,
        title: 'Neutral or Mixed',
        weight: 50,
      },
      {
        id: 4,
        title: 'Standard',
        weight: 70,
      },
      {
        id: 5,
        title: 'Positive',
        weight: 90,
      },
    ],
  },
  utility_cost: {
    weight: 5,
    criteria: [
      {
        id: 1,
        title: 'Very High',
        weight: 10,
      },
      {
        id: 2,
        title: 'High',
        weight: 30,
      },
      {
        id: 3,
        title: 'Standard',
        weight: 50,
      },
      {
        id: 4,
        title: 'Moderate',
        weight: 70,
      },
      {
        id: 5,
        title: 'Affordable',
        weight: 90,
      },
    ],
  },
  furnish_type: {
    weight: 5,
    criteria: [
      {
        id: 1,
        title: 'Fully Furnished',
        weight: 30,
      },
      {
        id: 2,
        title: 'Partially Furnished',
        weight: 50,
      },
      {
        id: 3,
        title: 'Unfurnished',
        weight: 90,
      },
    ],
  },
};

const property_preferences = [
  {
    property_id: 1,
    property_type: 3,
    property_age: 2,
    credit_histories: [3],
    amenities: [
      {
        id: 1,
        level: 20, // Fair
      },
      {
        id: 2,
        level: 10, // Poor
      },
      {
        id: 3,
        level: 60, // Good
      },
      {
        id: 4,
        level: 20, // Fair
      },
      {
        id: 5,
        level: 100, // Excellent
      },
    ],
    securities: [1, 2, 3],
    employment_types: [1, 2, 3, 4, 5],
    parking_type: 1,
    lease_terms: [1, 2, 3, 4, 5],
    pets_policy: 1,
    background: 1,
    utility_cost: 1,
    furnish_type: 1,
  },
  {
    property_id: 2,
    property_type: 1,
    property_age: 3,
    credit_histories: [2],
    amenities: [
      {
        id: 1,
        level: 20, // Fair
      },
      {
        id: 2,
        level: 10, // Poor
      },
      {
        id: 3,
        level: 60, // Good
      },
      {
        id: 4,
        level: 20, // Fair
      },
      {
        id: 5,
        level: 100, // Excellent
      },
    ],
    securities: [1, 2, 3],
    employment_types: [1, 2, 3, 4, 5],
    parking_type: 1,
    lease_terms: [1, 2, 3, 4, 5],
    pets_policy: 1,
    background: 1,
    utility_cost: 1,
    furnish_type: 1,
  },
];

const tenant_preferences = {
  tenant_id: 1,
  property_types: [1],
  property_ages: [1],
  credit_history: 2,
  amenities: [
    {
      id: 1,
      level: 20, // Fair
    },
    {
      id: 2,
      level: 10, // Poor
    },
    {
      id: 3,
      level: 60, // Good
    },
    {
      id: 4,
      level: 20, // Fair
    },
    {
      id: 5,
      level: 100, // Excellent
    },
  ],
  securities: [1, 2, 3],
  employment_type: 1,
  parking_type: 1,
  lease_terms: [1, 2, 3, 4, 5],
  pets_policy: 1,
  background: 1,
  utility_costs: [1, 2, 3, 4, 5],
  furnish_types: [1, 2, 3],
};

function calculateFurnishTypeScore(
  tenantFurnishType,
  propertyFurnishType,
  criteriaWeight
) {
  if (tenantFurnishType === propertyFurnishType) {
    let furnishTypeWeight = criteriaWeight.furnish_type.criteria.find(
      (c) => c.id === tenantFurnishType
    ).weight;
    return furnishTypeWeight;
  } else {
    return 0;
  }
}

function calculateUtilityCostScore(
  tenantUtilityCostPreference,
  propertyUtilityCost,
  criteriaWeight
) {
  if (tenantUtilityCostPreference === propertyUtilityCost) {
    let utilityCostWeight = criteriaWeight.utility_cost.criteria.find(
      (c) => c.id === tenantUtilityCostPreference
    ).weight;
    return utilityCostWeight;
  } else {
    return 0;
  }
}

function calculateBackgroundScore(
  tenantBackground,
  propertyBackgroundRequirement,
  criteriaWeight
) {
  if (tenantBackground >= propertyBackgroundRequirement) {
    let backgroundWeight = criteriaWeight.background.criteria.find(
      (c) => c.id === tenantBackground
    ).weight;
    return backgroundWeight;
  } else {
    return 0;
  }
}

function calculatePetsPolicyScore(
  tenantPetsPolicy,
  propertyPetsPolicy,
  criteriaWeight
) {
  if (tenantPetsPolicy === propertyPetsPolicy) {
    let petsPolicyWeight = criteriaWeight.pets_policy.criteria.find(
      (c) => c.id === tenantPetsPolicy
    ).weight;
    return petsPolicyWeight;
  } else {
    return 0;
  }
}

function calculateParkingTypeScore(
  tenantParkingType,
  propertyParkingType,
  criteriaWeight
) {
  if (tenantParkingType === propertyParkingType) {
    let parkingWeight = criteriaWeight.parking_type.criteria.find(
      (c) => c.id === tenantParkingType
    ).weight;
    return parkingWeight;
  } else {
    return 0;
  }
}

function calculateLeaseTermScore(
  tenantLeaseTerms,
  propertyLeaseTerm,
  criteriaWeight
) {
  if (tenantLeaseTerms.includes(propertyLeaseTerm)) {
    let leaseTermWeight = criteriaWeight.lease_term.criteria.find(
      (c) => c.id === propertyLeaseTerm
    ).weight;
    return leaseTermWeight;
  } else {
    return 0;
  }
}

function calculateEmploymentTypeScore(
  tenantEmploymentType,
  propertyEmploymentTypes,
  criteriaWeight
) {
  if (propertyEmploymentTypes.includes(tenantEmploymentType)) {
    let employmentWeight = criteriaWeight.employment_type.criteria.find(
      (c) => c.id === tenantEmploymentType
    ).weight;
    return employmentWeight;
  } else {
    return 0;
  }
}

function calculateAmenitiesScore(
  tenantAmenities,
  propertyAmenities,
  criteriaWeight
) {
  let totalScore = 0;
  let maxScore = tenantAmenities.length * 100;

  tenantAmenities.forEach((tenantAmenity) => {
    const propertyAmenity = propertyAmenities.find(
      (a) => a.id === tenantAmenity.id
    );

    if (propertyAmenity) {
      let levelDifference = Math.abs(
        tenantAmenity.level - propertyAmenity.level
      );
      let amenityScore = Math.max(0, 100 - levelDifference);
      totalScore += amenityScore;
    }
  });

  return (totalScore / maxScore) * 100;
}

function calculateCreditHistoryScore(
  tenantPreference,
  propertyCreditHistories,
  criteriaWeight
) {
  if (propertyCreditHistories.includes(tenantPreference)) {
    return criteriaWeight.credit_history.criteria.find(
      (c) => c.id === tenantPreference
    ).weight;
  } else {
    return 0;
  }
}

function calculatePropertyTypeScore(
  tenantPreferences,
  property,
  criteriaWeight
) {
  let propertyTypeScore = 0;
  if (tenantPreferences.property_types.includes(property.property_type)) {
    propertyTypeScore = criteriaWeight.property_types.criteria.find(
      (c) => c.id === property.property_type
    ).weight;
  } else {
    let minWeightDiff = Infinity;
    tenantPreferences.property_types.forEach((type) => {
      let weightDiff = Math.abs(
        criteriaWeight.property_types.criteria.find((c) => c.id === type)
          .weight -
          criteriaWeight.property_types.criteria.find(
            (c) => c.id === property.property_type
          ).weight
      );
      if (weightDiff < minWeightDiff) {
        minWeightDiff = weightDiff;
        propertyTypeScore = criteriaWeight.property_types.criteria.find(
          (c) => c.id === property.property_type
        ).weight;
      }
    });
  }

  return propertyTypeScore;
}

function calculatePropertyAgeScore(
  tenantPreferences,
  property,
  criteriaWeight
) {
  let propertyAgeScore = 0;
  if (tenantPreferences.property_ages.includes(property.property_age)) {
    propertyAgeScore = criteriaWeight.property_age.criteria.find(
      (c) => c.id === property.property_age
    ).weight;
  } else {
    let minWeightDiff = Infinity;
    tenantPreferences.property_ages.forEach((age) => {
      let weightDiff = Math.abs(
        criteriaWeight.property_age.criteria.find((c) => c.id === age).weight -
          criteriaWeight.property_age.criteria.find(
            (c) => c.id === property.property_age
          ).weight
      );
      if (weightDiff < minWeightDiff) {
        minWeightDiff = weightDiff;
        propertyAgeScore = criteriaWeight.property_age.criteria.find(
          (c) => c.id === property.property_age
        ).weight;
      }
    });
  }

  return propertyAgeScore;
}

function calculateSecurityScore(
  tenantSecurities,
  propertySecurities,
  criteriaWeight
) {
  let score = 0;
  const maxPossibleScore = criteriaWeight.security.criteria.reduce(
    (acc, cur) => acc + cur.weight,
    0
  );

  tenantSecurities.forEach((tenantSecurity) => {
    if (propertySecurities.includes(tenantSecurity)) {
      let securityWeight = criteriaWeight.security.criteria.find(
        (c) => c.id === tenantSecurity
      ).weight;
      score += securityWeight;
    }
  });

  return (score / maxPossibleScore) * 100;
}

function calculateScore(property, tenantPreferences, criteriaWeight) {
  let score = 0;

  let propertyTypeScore = calculatePropertyTypeScore(
    tenantPreferences,
    property,
    criteriaWeight
  );
  score += (propertyTypeScore * criteriaWeight.property_types.weight) / 100;

  let propertyAgeScore = calculatePropertyAgeScore(
    tenantPreferences,
    property,
    criteriaWeight
  );
  score += (propertyAgeScore * criteriaWeight.property_age.weight) / 100;

  let creditHistoryScore = calculateCreditHistoryScore(
    tenantPreferences.credit_history,
    property.credit_histories,
    criteriaWeight
  );
  score += (creditHistoryScore * criteriaWeight.credit_history.weight) / 100;

  let amenitiesScore = calculateAmenitiesScore(
    tenantPreferences.amenities,
    property.amenities,
    criteriaWeight
  );
  score += (amenitiesScore * criteriaWeight.amenities.weight) / 100;

  let securityScore = calculateSecurityScore(
    tenantPreferences.securities,
    property.securities,
    criteriaWeight
  );
  score += (securityScore * criteriaWeight.security.weight) / 100;

  let employmentTypeScore = calculateEmploymentTypeScore(
    tenantPreferences.employment_type,
    property.employment_types,
    criteriaWeight
  );

  score += (employmentTypeScore * criteriaWeight.employment_type.weight) / 100;

  let parkingTypeScore = calculateParkingTypeScore(
    tenantPreferences.parking_type,
    property.parking_type,
    criteriaWeight
  );
  score += (parkingTypeScore * criteriaWeight.parking_type.weight) / 100;

  let leaseTermScore = calculateLeaseTermScore(
    tenantPreferences.lease_terms,
    property.lease_terms,
    criteriaWeight
  );
  score += (leaseTermScore * criteriaWeight.lease_term.weight) / 100;

  let petsPolicyScore = calculatePetsPolicyScore(
    tenantPreferences.pets_policy,
    property.pets_policy,
    criteriaWeight
  );
  score += (petsPolicyScore * criteriaWeight.pets_policy.weight) / 100;

  let backgroundScore = calculateBackgroundScore(
    tenantPreferences.background,
    property.background,
    criteriaWeight
  );
  score += (backgroundScore * criteriaWeight.background.weight) / 100;

  //   let utilityCostScore = calculateUtilityCostScore(
  //     tenantPreferences.utility_costs,
  //     property.utility_cost,
  //     criteriaWeight
  //   );
  //   score += (utilityCostScore * criteriaWeight.utility_cost.weight) / 100;

  return score;
}

function findBestMatchedProperties(
  properties,
  tenantPreferences,
  criteriaWeight
) {
  return properties
    .map((property) => {
      return {
        property_id: property.property_id,
        score: calculateScore(property, tenantPreferences, criteriaWeight),
      };
    })
    .sort((a, b) => b.score - a.score);
}

const bestMatchedProperties = findBestMatchedProperties(
  property_preferences,
  tenant_preferences,
  criteria_weight
);
console.log(bestMatchedProperties);
