
const prisma = require("../src/configs/prima")
const bcrypt = require("bcryptjs")

const hashedPassword = bcrypt.hashSync('123456',10)


const userData = [
    {
        email : "admin01@mail.com",
        password : hashedPassword,
        firstName : "admin01",
        lastName : "Leo",
        phone : '0123456789',
        gender : "MALE",
        role : "ADMIN",
    },
    {
        email : "admin02@mail.com",
        password : hashedPassword,
        firstName : "admin02",
        lastName : "Ploy",
        phone : '0123456789',
        gender : "FEMALE",
        role : "ADMIN",
    },
    {
        email : "admin03@mail.com",
        password : hashedPassword,
        firstName : "admin03",
        lastName : "Bell",
        phone : '0123456789',
        gender : "OTHER",
        role : "PARTNER",
    },
    {
        email : "admin04@mail.com",
        password : hashedPassword,
        firstName : "admin04",
        lastName : "Big",
        role : "USER",
    },
    {
        email : "admin05@mail.com",
        password : hashedPassword,
        firstName : "admin05",
        lastName : "Boeing",
        phone : '0123456789',
        role : "USER",
    },
    {
        email : "admin06@mail.com",
        password : hashedPassword,
        firstName : "admin06",
        lastName : "Rock",
        phone : '0123456789',
        gender : "MALE",
        role : "PARTNER",
    },
    {
        email : "admin07@mail.com",
        password : hashedPassword,
        firstName : "admin07",
        lastName : "Jack",
        phone : '0123456789',
        gender : "FEMALE",
        role : "PARTNER",
    },
    {
        email : "admin08@mail.com",
        password : hashedPassword,
        firstName : "admin08",
        lastName : "Yui",
        phone : '0123456789',
        gender : "OTHER",
        role : "PARTNER",
    },
    {
        email : "admin09@mail.com",
        password : hashedPassword,
        firstName : "admin09",
        lastName : "Non",
        phone : '0123456789',
        gender : "MALE",
        role : "PARTNER",
    },

]

const partnerData = [
    {
        companyName : "Partner1",
        address:"address1",
        userId:3,
        taxNo:"123456789",
        bankName:"Bank2",
        bankAccount:"9876543215",
    },
    {
        companyName : "Partner2",
        address:"address2",
        userId:6,
        taxNo:"223456789",
        bankName:"Bank1",
        bankAccount:"9876543216",
    },
    {
        companyName : "Partner3",
        address:"address3",
        userId:7,
        taxNo:"323456789",
        bankName:"Bank3",
        bankAccount:"9876543217",
    },
    {
        companyName : "Partner4",
        address:"address4",
        userId:8,
        taxNo:"423456789",
        bankName:"Bank1",
        bankAccount:"98765432178",
    },
    {
        companyName : "Partner5",
        address:"address5",
        userId:9,
        taxNo:"523456789",
        bankName:"Bank2",
        bankAccount:"9876543219",
    },
]
const hotelData =[
    {
        name:"Hotel1",
        detail:"detail1",
        address:"address1",
        lat:456789,
        lng:987456,
        partnerId:1,
        img:"https://picsum.photos/id/237/200/300",
        checkinTime:"13:00",
        checkoutTime:"12:00",
        star:"5",
        phone:"0123456789",
        webPage:"www.hotel1.com",
        isActive:true,
    },
    {
        name:"Hotel2",
        detail:"detail2",
        address:"address2",
        lat:2456789,
        lng:2987456,
        partnerId:2,
        img:"https://picsum.photos/id/237/200/300",
        checkinTime:"13:00",
        checkoutTime:"12:00",
        star:"5",
        phone:"0123456789",
        webPage:"www.hotel1.com",
        isActive:true,
    },
    {
        name:"Hotel3",
        detail:"detail3",
        address:"address3",
        lat:3456789,
        lng:3987456,
        partnerId:3,
        img:"https://picsum.photos/id/237/200/300",
        checkinTime:"13:00",
        checkoutTime:"12:00",
        star:"5",
        phone:"0123456789",
        webPage:"www.hotel1.com",
        isActive:true,
    },
    {
        name:"Hotel4",
        detail:"detail4",
        address:"address4",
        lat:4456789,
        lng:4987456,
        partnerId:4,
        img:"https://picsum.photos/id/237/200/300",
        checkinTime:"13:00",
        checkoutTime:"12:00",
        star:"5",
        phone:"0123456789",
        webPage:"www.hotel1.com",
        isActive:true,
    },
    {
        name:"Hotel5",
        detail:"detail5",
        address:"address5",
        lat:5456789,
        lng:5987456,
        partnerId:5,
        img:"https://picsum.photos/id/237/200/300",
        checkinTime:"13:00",
        checkoutTime:"12:00",
        star:"5",
        phone:"0123456789",
        webPage:"www.hotel1.com",
        isActive:true,
    },
]

const facilitiesHotelsData = [
    {
      isRoomService: true,
      isReception: true,
      isFitness: true,
      isParking: true,
      isEVCharging: false,
      isSwimmingPool: true,
      isRestaurant: true,
      isBreakfast: true,
      isChildren: true,
      isPetFriendly: false,
      isElevator: true
    },
    {
      isRoomService: true,
      isReception: true,
      isFitness: false,
      isParking: true,
      isEVCharging: true,
      isSwimmingPool: false,
      isRestaurant: false,
      isBreakfast: true,
      isChildren: false,
      isPetFriendly: true,
      isElevator: true
    },
    {
      isRoomService: false,
      isReception: true,
      isFitness: false,
      isParking: true,
      isEVCharging: false,
      isSwimmingPool: true,
      isRestaurant: true,
      isBreakfast: false,
      isChildren: true,
      isPetFriendly: false,
      isElevator: false
    },
    {
      isRoomService: true,
      isReception: true,
      isFitness: true,
      isParking: false,
      isEVCharging: false,
      isSwimmingPool: false,
      isRestaurant: true,
      isBreakfast: false,
      isChildren: false,
      isPetFriendly: false,
      isElevator: true
    },
    {
      isRoomService: false,
      isReception: true,
      isFitness: true,
      isParking: true,
      isEVCharging: true,
      isSwimmingPool: true,
      isRestaurant: false,
      isBreakfast: true,
      isChildren: false,
      isPetFriendly: true,
      isElevator: false
    }
  ];
  

const roomData = [
    {
      name: "Room1",
      detail: "detail1",
      status: "AVAILABLE",
      type: "DOUBLE",
      price: 2000.00,
      recommendPeople: 4,
      size: 40.0,
      hotelId: 1,
      facilityRoomId: 1,
      roomAmount: 5,
      images: [
        { img: "https://picsum.photos/seed/picsum/200/300" },
        { img: "https://picsum.photos/seed/picsum/200/300" }
      ]
    },
    {
      name: "Room2",
      detail: "detail2",
      status: "UNAVAILABLE",
      type: "MASTER",
      price: 3000.00,
      recommendPeople: 6,
      size: 50.0,
      hotelId: 1,
      facilityRoomId: 2,
      roomAmount: 3,
      images: [
        { img: "https://picsum.photos/seed/picsum/200/300" },
        { img: "https://picsum.photos/seed/picsum/200/300" }
      ]
    },
    {
      name: "Room3",
      detail: "detail3",
      status: "AVAILABLE",
      type: "SUITE",
      price: 1000.00,
      recommendPeople: 2,
      size: 20.0,
      hotelId: 1,
      facilityRoomId: 3,
      roomAmount: 8,
      images: [
        { img: "https://picsum.photos/seed/picsum/200/300" },
        { img: "https://picsum.photos/seed/picsum/200/300" }
      ]
    },
    {
        name: "Room4",
        detail: "detail1",
        status: "AVAILABLE",
        type: "DOUBLE",
        price: 2000.00,
        recommendPeople: 4,
        size: 40.0,
        hotelId: 2,
        facilityRoomId: 1,
        roomAmount: 5,
        images: [
          { img: "https://picsum.photos/seed/picsum/200/300" },
          { img: "https://picsum.photos/seed/picsum/200/300" }
        ]
      },
      {
        name: "Room5",
        detail: "detail2",
        status: "UNAVAILABLE",
        type: "MASTER",
        price: 3000.00,
        recommendPeople: 6,
        size: 50.0,
        hotelId: 2,
        facilityRoomId: 2,
        roomAmount: 3,
        images: [
          { img: "https://picsum.photos/seed/picsum/200/300" },
          { img: "https://picsum.photos/seed/picsum/200/300" }
        ]
      },
      {
        name: "Room6",
        detail: "detail3",
        status: "AVAILABLE",
        type: "SUITE",
        price: 1000.00,
        recommendPeople: 2,
        size: 20.0,
        hotelId: 3,
        facilityRoomId: 3,
        roomAmount: 8,
        images: [
          { img: "https://picsum.photos/seed/picsum/200/300" },
          { img: "https://picsum.photos/seed/picsum/200/300" }
        ]
      },
      {
        name: "Room7",
        detail: "detail1",
        status: "AVAILABLE",
        type: "DOUBLE",
        price: 2000.00,
        recommendPeople: 4,
        size: 40.0,
        hotelId: 3,
        facilityRoomId: 1,
        roomAmount: 5,
        images: [
          { img: "https://picsum.photos/seed/picsum/200/300" },
          { img: "https://picsum.photos/seed/picsum/200/300" }
        ]
      },
      {
        name: "Room8",
        detail: "detail2",
        status: "UNAVAILABLE",
        type: "MASTER",
        price: 3000.00,
        recommendPeople: 6,
        size: 50.0,
        hotelId: 4,
        facilityRoomId: 2,
        roomAmount: 3,
        images: [
          { img: "https://picsum.photos/seed/picsum/200/300" },
          { img: "https://picsum.photos/seed/picsum/200/300" }
        ]
      },
      {
        name: "Room9",
        detail: "detail3",
        status: "AVAILABLE",
        type: "SUITE",
        price: 1000.00,
        recommendPeople: 2,
        size: 20.0,
        hotelId: 4,
        facilityRoomId: 3,
        roomAmount: 8,
        images: [
          { img: "https://picsum.photos/seed/picsum/200/300" },
          { img: "https://picsum.photos/seed/picsum/200/300" }
        ]
      },
      {
        name: "Room10",
        detail: "detail3",
        status: "AVAILABLE",
        type: "SUITE",
        price: 1000.00,
        recommendPeople: 2,
        size: 20.0,
        hotelId: 5,
        facilityRoomId: 3,
        roomAmount: 8,
        images: [
          { img: "https://picsum.photos/seed/picsum/200/300" },
          { img: "https://picsum.photos/seed/picsum/200/300" }
        ]
      }
  ];
  
  const facilitiesRoomsData = [
    {
      isSmoking: true,
      isAirCondition: true,
      isPrivateBathroom: true,
      isBalcony: false,
      isView: true,
      isTelevision: true,
      isRefrigerator: true,
      isShower: true,
      isBathtub: false,
      isWifi: true
    },
    {
      isSmoking: false,
      isAirCondition: true,
      isPrivateBathroom: true,
      isBalcony: true,
      isView: false,
      isTelevision: true,
      isRefrigerator: false,
      isShower: true,
      isBathtub: true,
      isWifi: false
    },
    {
      isSmoking: false,
      isAirCondition: false,
      isPrivateBathroom: false,
      isBalcony: false,
      isView: true,
      isTelevision: false,
      isRefrigerator: false,
      isShower: true,
      isBathtub: false,
      isWifi: true
    },
    {
        isSmoking: true,
        isAirCondition: true,
        isPrivateBathroom: true,
        isBalcony: false,
        isView: true,
        isTelevision: true,
        isRefrigerator: true,
        isShower: true,
        isBathtub: false,
        isWifi: true
      },
      {
        isSmoking: false,
        isAirCondition: true,
        isPrivateBathroom: true,
        isBalcony: true,
        isView: false,
        isTelevision: true,
        isRefrigerator: false,
        isShower: true,
        isBathtub: true,
        isWifi: false
      },
      {
        isSmoking: false,
        isAirCondition: false,
        isPrivateBathroom: false,
        isBalcony: false,
        isView: true,
        isTelevision: false,
        isRefrigerator: false,
        isShower: true,
        isBathtub: false,
        isWifi: true
      },
      {
        isSmoking: false,
        isAirCondition: true,
        isPrivateBathroom: true,
        isBalcony: true,
        isView: true,
        isTelevision: false,
        isRefrigerator: true,
        isShower: true,
        isBathtub: false,
        isWifi: true
      },
      {
        isSmoking: true,
        isAirCondition: false,
        isPrivateBathroom: true,
        isBalcony: false,
        isView: false,
        isTelevision: true,
        isRefrigerator: false,
        isShower: true,
        isBathtub: true,
        isWifi: false
      },
      {
        isSmoking: false,
        isAirCondition: true,
        isPrivateBathroom: false,
        isBalcony: true,
        isView: false,
        isTelevision: true,
        isRefrigerator: true,
        isShower: false,
        isBathtub: true,
        isWifi: true
      },
      {
        isSmoking: true,
        isAirCondition: false,
        isPrivateBathroom: true,
        isBalcony: false,
        isView: true,
        isTelevision: false,
        isRefrigerator: false,
        isShower: true,
        isBathtub: false,
        isWifi: true
      },
      {
        isSmoking: false,
        isAirCondition: true,
        isPrivateBathroom: false,
        isBalcony: true,
        isView: true,
        isTelevision: true,
        isRefrigerator: true,
        isShower: true,
        isBathtub: false,
        isWifi: false
      },
      {
        isSmoking: false,
        isAirCondition: false,
        isPrivateBathroom: false,
        isBalcony: true,
        isView: false,
        isTelevision: false,
        isRefrigerator: false,
        isShower: true,
        isBathtub: false,
        isWifi: false
      }
  ];
  const promotionData = [
    {
      name: "New Year Sale",
      img: "new_year_sale.jpg",
      code: "NY2024",
      description: "Celebrate the New Year with a 20% discount on all bookings!",
      discountPercent: 20.0,
      discountValue: 0,
      minimumSpend: 5000.0,
      maxDiscount: 2000.0,
      usageLimit: 100,
      userLimit: 1,
      isActive: true,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-01-31")
    },
    {
      name: "Summer Splash",
      img: "summer_splash.jpg",
      code: "SUMMER23",
      description: "Enjoy your summer with a flat $500 discount on all hotels!",
      discountPercent: 0,
      discountValue: 500.0,
      minimumSpend: 3000.0,
      maxDiscount: 500.0,
      usageLimit: 50,
      userLimit: 1,
      isActive: true,
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-08-31")
    },
    {
      name: "Weekend Getaway",
      img: "weekend_getaway.jpg",
      code: "WEEKEND",
      description: "10% discount for weekend bookings!",
      discountPercent: 10.0,
      discountValue: 0,
      minimumSpend: 2000.0,
      maxDiscount: 500.0,
      usageLimit: 200,
      userLimit: 2,
      isActive: true,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31")
    },
    {
      name: "Flash Sale",
      img: "flash_sale.jpg",
      code: "FLASH50",
      description: "50% discount for a limited time!",
      discountPercent: 50.0,
      discountValue: 0,
      minimumSpend: 4000.0,
      maxDiscount: 1500.0,
      usageLimit: 30,
      userLimit: 1,
      isActive: false,
      startDate: new Date("2024-09-01"),
      endDate: new Date("2024-09-07")
    },
    {
      name: "Christmas Special",
      img: "christmas_special.jpg",
      code: "XMAS2024",
      description: "Celebrate Christmas with a 25% discount on your next booking!",
      discountPercent: 25.0,
      discountValue: 0,
      minimumSpend: 6000.0,
      maxDiscount: 2500.0,
      usageLimit: 150,
      userLimit: 1,
      isActive: true,
      startDate: new Date("2024-12-20"),
      endDate: new Date("2024-12-26")
    }
  ];
  const bookingData = [
    {
      UUID: "uuid-12345",
      status: "CONFIRMED",
      totalPrice: 7500.00,
      checkinDate: new Date("2024-11-01"),
      checkoutDate: new Date("2024-11-05"),
      userId: 4,
      hotelId: 1,
      userHavePromotionId: 1
    },
    {
      UUID: "uuid-67890",
      status: "PENDING",
      totalPrice: 4500.00,
      checkinDate: new Date("2024-12-01"),
      checkoutDate: new Date("2024-12-03"),
      userId: 4,
      hotelId: 2,
      userHavePromotionId: 2
    },
    {
      UUID: "uuid-11121",
      status: "CANCELLED",
      totalPrice: 5000.00,
      checkinDate: new Date("2024-12-10"),
      checkoutDate: new Date("2024-12-15"),
      userId: 4,
      hotelId: 3,
      userHavePromotionId: null
    },
    {
      UUID: "uuid-22232",
      status: "CONFIRMED",
      totalPrice: 8800.00,
      checkinDate: new Date("2024-12-20"),
      checkoutDate: new Date("2024-12-25"),
      userId: 5,
      hotelId: 4,
      userHavePromotionId: 3
    },
    {
      UUID: "uuid-33343",
      status: "COMPLETED",
      totalPrice: 9200.00,
      checkinDate: new Date("2025-01-10"),
      checkoutDate: new Date("2025-01-15"),
      userId: 5,
      hotelId: 5,
      userHavePromotionId: 4
    }
  ];
  const bookingRoomsData = [
    { bookingId: 1, roomId: 1, amountRoom: 1 },
    { bookingId: 2, roomId: 2, amountRoom: 2 },
    { bookingId: 3, roomId: 3, amountRoom: 1 },
    { bookingId: 4, roomId: 4, amountRoom: 3 },
    { bookingId: 5, roomId: 5, amountRoom: 1 }
  ];

  const reviewData = [
    {
      content: "Amazing stay! The staff were so friendly and the room was perfect.",
      userId: 4,
      bookingId: 1,
      hotelId: 1,
      rating: 5,
      img: "review1.jpg"
    },
    {
      content: "The hotel was good, but the room could be cleaner.",
      userId: 4,
      bookingId: 2,
      hotelId: 2,
      rating: 3,
      img: "review2.jpg"
    },
    {
      content: "Had a great time! The pool area is fantastic.",
      userId: 4,
      bookingId: 3,
      hotelId: 3,
      rating: 4,
      img: null
    },
    {
      content: "Not worth the price. Service was lacking.",
      userId: 5,
      bookingId: 4,
      hotelId: 4,
      rating: 2,
      img: "review4.jpg"
    },
    {
      content: "Exceptional experience! Will definitely come back again.",
      userId: 5,
      bookingId: 5,
      hotelId: 5,
      rating: 5,
      img: "review5.jpg"
    }
  ];
  const paymentsData = [
    {
      paymentMethod: "CREDITCARD",
      bookingId: 1
    },
    {
      paymentMethod: "SCAN",
      bookingId: 2
    },
    {
      paymentMethod: "CREDITCARD",
      bookingId: 3
    },
    {
      paymentMethod: "SCAN",
      bookingId: 4
    },
    {
      paymentMethod: "CREDITCARD",
      bookingId: 5
    }
  ];
  
  async function run() {
    await prisma.user.createMany({ data: userData })
    await prisma.partner.createMany({ data: partnerData })
    await prisma.hotel.createMany({ data: hotelData })
    await prisma.facilitiesHotels.createMany({ data: facilitiesHotelsData })
    await prisma.room.createMany({ data: roomData })
    await prisma.facilitiesRooms.createMany({ data: facilitiesRoomsData })
    await prisma.promotion.createMany({ data: promotionData })
    await prisma.booking.createMany({ data: bookingData })
    await prisma.bookingRoom.createMany({ data: bookingRoomsData })
    await prisma.review.createMany({ data: reviewData })
    await prisma.payments.createMany({ data: paymentsData })
}

run();