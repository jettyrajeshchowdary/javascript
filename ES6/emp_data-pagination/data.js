const employees = [
    { id: 1, name: "Tabor", email: "tgoodswen0@twitpic.com", gender: "Male" },
    { id: 2, name: "Darsey", email: "dtorvey1@facebook.com", gender: "Female" },
    { id: 3, name: "Webster", email: "wdoles2@techcrunch.com", gender: "Male" },
    { id: 4, name: "Harris", email: "hwelland3@addtoany.com", gender: "Male" },
    { id: 5, name: "Ailis", email: "acleef4@cpanel.net", gender: "Female" },
    {
      id: 6,
      name: "Aurelia",
      email: "amountford5@fastcompany.com",
      gender: "Female",
    },
    { id: 7, name: "Ivor", email: "idessant6@icq.com", gender: "Male" },
    {
      id: 8,
      name: "Wolfgang",
      email: "wblanch7@ezinearticles.com",
      gender: "Male",
    },
    { id: 9, name: "Dori", email: "dgarfoot8@storify.com", gender: "Female" },
    { id: 10, name: "Ibrahim", email: "imacneilley9@meetup.com", gender: "Male" },
    { id: 11, name: "Ruthann", email: "rweipperta@ed.gov", gender: "Female" },
    {
      id: 12,
      name: "Christie",
      email: "cpawlettb@blogger.com",
      gender: "Female",
    },
    {
      id: 13,
      name: "Callida",
      email: "cbafordc@cafepress.com",
      gender: "Agender",
    },
    {
      id: 14,
      name: "Hallie",
      email: "hpetyakovd@geocities.com",
      gender: "Female",
    },
    { id: 15, name: "Bradney", email: "bsnuggse@51.la", gender: "Male" },
    {
      id: 16,
      name: "Bridget",
      email: "bwickendenf@adobe.com",
      gender: "Polygender",
    },
    { id: 17, name: "Bennie", email: "bromanetg@geocities.jp", gender: "Male" },
    { id: 18, name: "Chancey", email: "clamberthh@boston.com", gender: "Male" },
    { id: 19, name: "Roth", email: "rjoselevitzi@mozilla.org", gender: "Male" },
    {
      id: 20,
      name: "Boonie",
      email: "bhollymanj@google.pl",
      gender: "Non-binary",
    },
    {
      id: 21,
      name: "Rockwell",
      email: "rfilintsevk@washingtonpost.com",
      gender: "Male",
    },
    { id: 22, name: "Kenna", email: "kledsterl@java.com", gender: "Agender" },
    { id: 23, name: "Kenton", email: "klavinm@ycombinator.com", gender: "Male" },
    { id: 24, name: "Griswold", email: "gmathivatn@squidoo.com", gender: "Male" },
    { id: 25, name: "Harvey", email: "hdivello@google.de", gender: "Male" },
    { id: 26, name: "Dene", email: "dgofordp@intel.com", gender: "Male" },
    { id: 27, name: "Arlette", email: "agillioq@opera.com", gender: "Female" },
    {
      id: 28,
      name: "Laina",
      email: "lpetrillor@amazonaws.com",
      gender: "Female",
    },
    { id: 29, name: "Ware", email: "wtires@sitemeter.com", gender: "Bigender" },
    { id: 30, name: "Yorgos", email: "ydarcht@who.int", gender: "Male" },
    { id: 31, name: "Amabel", email: "awadhamu@mapy.cz", gender: "Female" },
    {
      id: 32,
      name: "Othello",
      email: "ochasmarv@reverbnation.com",
      gender: "Male",
    },
    {
      id: 33,
      name: "Corinne",
      email: "cflawithw@kickstarter.com",
      gender: "Female",
    },
    { id: 34, name: "Peg", email: "pgeldeardx@mashable.com", gender: "Female" },
    { id: 35, name: "Vidovik", email: "vbeddoy@edublogs.org", gender: "Male" },
    { id: 36, name: "Jeremy", email: "jmadeleyz@amazon.com", gender: "Male" },
    { id: 37, name: "Luci", email: "lbaribal10@123-reg.co.uk", gender: "Female" },
    {
      id: 38,
      name: "Freddie",
      email: "felverston11@over-blog.com",
      gender: "Male",
    },
    { id: 39, name: "Olenolin", email: "ogarrick12@wufoo.com", gender: "Male" },
    {
      id: 40,
      name: "Gretel",
      email: "gcohani13@vistaprint.com",
      gender: "Female",
    },
    { id: 41, name: "Holt", email: "hible14@amazonaws.com", gender: "Male" },
    {
      id: 42,
      name: "Shalne",
      email: "shandley15@tamu.edu",
      gender: "Genderqueer",
    },
    { id: 43, name: "Mollee", email: "mwhittaker16@umich.edu", gender: "Female" },
    {
      id: 44,
      name: "Stearn",
      email: "smaccallister17@goo.ne.jp",
      gender: "Male",
    },
    { id: 45, name: "Charmian", email: "cbenet18@ibm.com", gender: "Female" },
    { id: 46, name: "Karim", email: "kbridell19@cdc.gov", gender: "Bigender" },
    {
      id: 47,
      name: "Aurora",
      email: "areuble1a@china.com.cn",
      gender: "Non-binary",
    },
    {
      id: 48,
      name: "Vikky",
      email: "vshivell1b@prnewswire.com",
      gender: "Female",
    },
    { id: 49, name: "Enrique", email: "esibery1c@army.mil", gender: "Male" },
    { id: 50, name: "Estele", email: "ecopeman1d@reddit.com", gender: "Female" },
    {
      id: 51,
      name: "Denice",
      email: "dblyth1e@dagondesign.com",
      gender: "Female",
    },
    { id: 52, name: "Rog", email: "rmanser1f@discuz.net", gender: "Male" },
    { id: 53, name: "Deena", email: "dhickin1g@eepurl.com", gender: "Female" },
    { id: 54, name: "Almeda", email: "alavrick1h@jiathis.com", gender: "Female" },
    { id: 55, name: "Gale", email: "gboswell1i@goo.gl", gender: "Female" },
    { id: 56, name: "Isacco", email: "iwiltshire1j@toplist.cz", gender: "Male" },
    { id: 57, name: "Pepita", email: "pmayoh1k@umich.edu", gender: "Female" },
    { id: 58, name: "Adriano", email: "aboyd1l@bloglovin.com", gender: "Male" },
    { id: 59, name: "Noe", email: "nantalffy1m@who.int", gender: "Male" },
    { id: 60, name: "Sheba", email: "spatrick1n@nymag.com", gender: "Female" },
    { id: 61, name: "Rocky", email: "rranner1o@eventbrite.com", gender: "Male" },
    { id: 62, name: "Jackie", email: "jidell1p@gravatar.com", gender: "Female" },
    {
      id: 63,
      name: "Kippy",
      email: "knorgate1q@craigslist.org",
      gender: "Female",
    },
    {
      id: 64,
      name: "Jaynell",
      email: "jcreenan1r@multiply.com",
      gender: "Female",
    },
    { id: 65, name: "Bogey", email: "bdargue1s@facebook.com", gender: "Male" },
    { id: 66, name: "Frank", email: "fmugford1t@scribd.com", gender: "Female" },
    { id: 67, name: "Garrett", email: "gbeek1u@prweb.com", gender: "Male" },
    { id: 68, name: "Sherman", email: "sgiovanizio1v@upenn.edu", gender: "Male" },
    { id: 69, name: "Wald", email: "wcockrem1w@narod.ru", gender: "Male" },
    { id: 70, name: "Brandais", email: "belgey1x@etsy.com", gender: "Female" },
    {
      id: 71,
      name: "Lazare",
      email: "ltolemache1y@woothemes.com",
      gender: "Male",
    },
    {
      id: 72,
      name: "Kathlin",
      email: "kfantone1z@earthlink.net",
      gender: "Female",
    },
    { id: 73, name: "Sula", email: "spalk20@cdc.gov", gender: "Female" },
    { id: 74, name: "Miner", email: "mlintott21@un.org", gender: "Male" },
    {
      id: 75,
      name: "Alisander",
      email: "aroggers22@marketwatch.com",
      gender: "Male",
    },
    {
      id: 76,
      name: "Kally",
      email: "ksinnock23@tripadvisor.com",
      gender: "Female",
    },
    { id: 77, name: "Zea", email: "zclemett24@hostgator.com", gender: "Female" },
    {
      id: 78,
      name: "Antonio",
      email: "arylett25@tripadvisor.com",
      gender: "Male",
    },
    { id: 79, name: "Hunt", email: "hprester26@e-recht24.de", gender: "Male" },
    { id: 80, name: "Waylan", email: "wcapron27@ameblo.jp", gender: "Male" },
    {
      id: 81,
      name: "Rosalie",
      email: "rbloxham28@angelfire.com",
      gender: "Female",
    },
    {
      id: 82,
      name: "Kelci",
      email: "ktregenna29@soundcloud.com",
      gender: "Female",
    },
    {
      id: 83,
      name: "Shaine",
      email: "sbennedick2a@businesswire.com",
      gender: "Female",
    },
    { id: 84, name: "Maxie", email: "mlivingston2b@com.com", gender: "Male" },
    { id: 85, name: "Zelig", email: "zcreggan2c@umich.edu", gender: "Male" },
    {
      id: 86,
      name: "Lambert",
      email: "lwillcox2d@cargocollective.com",
      gender: "Male",
    },
    { id: 87, name: "Vernen", email: "vtinman2e@wikipedia.org", gender: "Male" },
    { id: 88, name: "Ettie", email: "emccay2f@netlog.com", gender: "Female" },
    {
      id: 89,
      name: "Coralyn",
      email: "cstilliard2g@patch.com",
      gender: "Female",
    },
    {
      id: 90,
      name: "Henry",
      email: "hphilliskirk2h@wikipedia.org",
      gender: "Male",
    },
  ];
  
  const tableBody = document.getElementById("table-body");
  const maleDetails = document.getElementById("male-detail");
  const femaleDetails = document.getElementById("female-detail");
  const otherDetails = document.getElementById("other-detail");
  
  let row = "";
  let maleCount = 0;
  let femaleCount = 0;
  let otherCount = 0;
  
  for (employee of employees) {
    row =
      row +
      `<tr>
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.gender}</td>
          <td>${employee.email}</td>
          </tr>`;
  
    if (employee.gender === "Male") {
      maleCount = maleCount + 1;
    }
    if (employee.gender === "Female") {
      femaleCount = femaleCount + 1;
    }
    if (employee.gender !== "Male" && employee.gender !== "Female") {
      otherCount = otherCount + 1;
    }
    tableBody.innerHTML = row;
  }
  
  maleDetails.innerHTML += ` ${maleCount}`;
  femaleDetails.innerHTML += ` ${femaleCount}`;
  otherDetails.innerHTML += ` ${otherCount}`;
  
  function filterHandler(employeeGender) {
    let row = "";
    for (employee of employees) {
      if (employee.gender === employeeGender) {
        row =
          row +
          `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.gender}</td>
                <td>${employee.email}</td>
            </tr>`;
      }
      tableBody.innerHTML = row;
    }
  }
  
  /**Applying pagination for the table */
  
  const rowsPerPage = 20;
  const totalPages = Math.ceil(employees.length / rowsPerPage);
  console.log(totalPages);
  
  const paginationFeature = Array.from({ length: totalPages }, (_, index) => {
    //   console.log(index);
    const start = index * rowsPerPage;
    const demo = employees.slice(start, start + rowsPerPage);
  
    return demo;
  });
  
  console.log(paginationFeature);
  
  function pageHandler(pageNumber) {
    let currentPageData = paginationFeature[pageNumber - 1];
    let row = "";
    for (emp of currentPageData) {
      row =
        row +
        `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.gender}</td>
                <td>${emp.email}</td>
            </tr>`;
    }
    tableBody.innerHTML = row;
  }
  
  // tableBody.innerHTML = "Hi";
  
  // Looping over an array of details to place into the table
  
  // let row = `<tr>
  //                 <td>${employees[0].id}</td>
  //                 <td>${employees[0].name}</td>
  //                 <td>${employees[0].email}</td>
  //                 <td>${employees[0].gender}</td>
  //             </tr>`;