import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio and weightlifting areas",
              "Limited group fitness classes",
              "No personal trainer sessions"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
              "Full access to all gym facilities",
              "Unlimited group fitness classes",
              "1 personal trainer session per month"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
              "Full access to all gym facilities",
              "Unlimited group fitness classes",
              "2 personal trainer sessions per month",
              "Sauna and spa access"
            ]
          }
        ]
      
      
    return (
        <div className="m-12">
            <h2 className='text-5xl'>Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
               priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption> )
            }
           </div>
        </div>
    );
};

export default PriceOptions;