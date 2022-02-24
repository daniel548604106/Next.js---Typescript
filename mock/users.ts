const users = [
  {
    id: '83ab8a3d-6003-4458-8f9a-929eb65b338e',
    name: 'Eleanor Skiles',
    username: 'Tanner',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg',
    isFollowing: true,
  },
  {
    id: 'c5448cab-3cdb-4e9d-922c-9862b6e7964d',
    name: 'Miss Miranda Zulauf',
    username: 'Priscilla',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/45.jpg',
    isFollowing: false,
  },
  {
    id: '7303a6bd-f614-4056-9fe7-1d4f941b49c7',
    name: 'Joanna Gottlieb DDS',
    username: 'Lucio',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/315.jpg',
    isFollowing: false,
  },
  {
    id: 'f96caa05-26cb-455c-93ad-74d528beaf13',
    name: 'Dr. Sean Willms',
    username: 'Effie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/249.jpg',
    isFollowing: true,
  },
  {
    id: '7cf45e69-32a0-41cd-9317-1567ae486a55',
    name: 'Sylvia Franey',
    username: 'Trycia',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/82.jpg',
    isFollowing: true,
  },
  {
    id: '07e62ae5-9059-4959-a2f4-2974e8870c42',
    name: 'William Emmerich',
    username: 'Omer',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/52.jpg',
    isFollowing: false,
  },
  {
    id: '45972fc5-fd73-463f-a445-5e1ad68aa2b8',
    name: 'Pete Hegmann MD',
    username: 'Jacques',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1234.jpg',
    isFollowing: true,
  },
  {
    id: '35ce3d62-1e51-44db-96d1-2f3a5806ba18',
    name: 'Anita Konopelski',
    username: 'Carolyne',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg',
    isFollowing: true,
  },
  {
    id: '554f53e5-1d7b-4b25-95d9-08537f4824f6',
    name: 'Kerry Runte',
    username: 'Lydia',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/335.jpg',
    isFollowing: false,
  },
  {
    id: '35b1122f-d677-4efc-bcec-e1f8bc9ce350',
    name: 'Clarence Heller',
    username: 'Thalia',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/998.jpg',
    isFollowing: false,
  },
  {
    id: 'bb479590-7ccc-44df-9819-137ba54c9ab1',
    name: 'Freda Ferry',
    username: 'Vilma',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/740.jpg',
    isFollowing: true,
  },
  {
    id: '63f481d7-b345-44bf-80f0-a067a089c512',
    name: 'Johnnie Hayes',
    username: 'Kimberly',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/663.jpg',
    isFollowing: true,
  },
  {
    id: '8f4384f6-6bea-4d8b-a92d-8aaf09c45e24',
    name: 'Mrs. Johnathan Hand',
    username: 'Krystal',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/339.jpg',
    isFollowing: false,
  },
  {
    id: '0bd96933-8d11-49e8-93cc-1a592fd5059f',
    name: 'Gregg Weissnat',
    username: 'Turner',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/665.jpg',
    isFollowing: true,
  },
  {
    id: '74f6dd7f-63db-452c-8f17-5fe4689e3a1b',
    name: 'Mrs. Randy Collins',
    username: 'Abner',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/214.jpg',
    isFollowing: true,
  },
  {
    id: '88977881-00ad-4bce-871b-5d3e9cd0ac2b',
    name: 'Wayne Nolan',
    username: 'Rex',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1099.jpg',
    isFollowing: true,
  },
  {
    id: 'a32873d4-dd8d-4574-9b66-53fc3bdf89c5',
    name: 'Kelli Klocko',
    username: 'Guadalupe',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/717.jpg',
    isFollowing: true,
  },
  {
    id: 'ba38c4df-9085-4899-9ae4-eca071947774',
    name: 'Stanley Morar',
    username: 'Jaylan',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/204.jpg',
    isFollowing: true,
  },
  {
    id: 'f2420a6d-3f5b-4288-a317-8ec6f0888b7b',
    name: 'Ms. Alonzo Boyer',
    username: 'Hudson',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg',
    isFollowing: true,
  },
  {
    id: '67af81c4-ccef-4543-a9f9-a3620b224b8a',
    name: 'Marty Kunde',
    username: 'Thea',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg',
    isFollowing: false,
  },
  {
    id: 'fb94e372-dc88-46b1-87e3-0306d7d16d20',
    name: 'Ms. Clayton Weber',
    username: 'Taya',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg',
    isFollowing: true,
  },
  {
    id: '477ee138-c6ca-4ae3-8182-15c7a32ebd05',
    name: 'Homer Hyatt',
    username: 'Marty',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg',
    isFollowing: true,
  },
  {
    id: '87a38e74-6753-477a-aa9e-342672cc2f1b',
    name: 'Colin Schimmel',
    username: 'Abbey',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/820.jpg',
    isFollowing: true,
  },
  {
    id: 'ea44a101-7f9f-4997-a45e-42d6230b09de',
    name: 'Levi VonRueden DDS',
    username: 'Benjamin',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/458.jpg',
    isFollowing: true,
  },
  {
    id: 'b0b02c0b-eaa1-4a60-8646-761603e9f52e',
    name: 'Vincent Lueilwitz',
    username: 'Gianni',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/524.jpg',
    isFollowing: true,
  },
  {
    id: '8cd9383a-e3f9-4bbd-b829-71e9bf20657c',
    name: 'Sheila Haley',
    username: 'Catalina',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg',
    isFollowing: true,
  },
  {
    id: 'e1e15f00-6e90-4b2f-90a6-53151ad355aa',
    name: 'Allan Legros',
    username: 'Antonietta',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1020.jpg',
    isFollowing: true,
  },
  {
    id: '3ba5b318-eda1-4137-970d-48ff58dd07ee',
    name: 'Ruben Conn',
    username: 'Jovan',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1139.jpg',
    isFollowing: true,
  },
  {
    id: 'a6e14bb1-ab36-4632-84b7-b842b37df14e',
    name: 'Cristina Turner II',
    username: 'Clara',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg',
    isFollowing: true,
  },
  {
    id: '898a4f8f-8211-400b-a8bc-63a447e3dbab',
    name: 'Rodolfo Heaney',
    username: 'Dimitri',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/399.jpg',
    isFollowing: true,
  },
  {
    id: 'f944745e-9b36-406a-a0f8-fae44b0c3b2f',
    name: 'Earnest Cassin',
    username: 'Bennie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1235.jpg',
    isFollowing: true,
  },
  {
    id: 'e7d83baf-2a22-4ad0-a93f-07e1b1aab2c9',
    name: 'Marian Quigley',
    username: 'Lavina',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/984.jpg',
    isFollowing: true,
  },
  {
    id: 'a00930f1-ae25-46b5-bedd-9dcde9a15fab',
    name: 'Della Wiza',
    username: 'Grady',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1076.jpg',
    isFollowing: true,
  },
  {
    id: '94c31452-16fb-4a85-b671-97c23e06fc63',
    name: 'Jesse Batz',
    username: 'Stephon',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/33.jpg',
    isFollowing: true,
  },
  {
    id: '66cc7e18-8228-4c43-9c4b-74d9a5364b9b',
    name: 'Joann Cartwright',
    username: 'Curtis',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/493.jpg',
    isFollowing: true,
  },
  {
    id: 'fd5a9ce4-96dc-4c00-8941-9ed4f781437e',
    name: 'Gloria McGlynn',
    username: 'Pinkie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1184.jpg',
    isFollowing: true,
  },
  {
    id: '6a5abbe9-9a78-47e9-a5d5-1e985bc98abb',
    name: 'Clay Lindgren',
    username: 'Lawrence',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/988.jpg',
    isFollowing: true,
  },
  {
    id: '14db1c8f-b64b-49d0-bef8-d3cd5f4df1e5',
    name: 'Steven Green',
    username: 'Mariane',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/743.jpg',
    isFollowing: true,
  },
  {
    id: '57b10e73-1206-4256-ada2-04da57da6c44',
    name: 'Jacob Rippin',
    username: 'Fannie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg',
    isFollowing: true,
  },
  {
    id: '4d269b30-69ce-4c2f-9ad2-5ffc80b41c2c',
    name: 'Kirk Kunde',
    username: 'Earnestine',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1218.jpg',
    isFollowing: true,
  },
  {
    id: '8b74cb2e-b521-41d0-b3e5-6c4b5f851e4a',
    name: 'Johnny Raynor',
    username: 'Sienna',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/868.jpg',
    isFollowing: true,
  },
  {
    id: 'a37218fc-0ff0-410d-9915-a24e40f7a657',
    name: 'Timmy Feeney',
    username: 'Rebeca',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg',
    isFollowing: true,
  },
  {
    id: '5d59a91b-a21a-4fbd-9661-51dc59c47bb1',
    name: 'Everett Carter',
    username: 'Edd',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/177.jpg',
    isFollowing: true,
  },
  {
    id: '3b500e77-4418-4cfc-834c-b27cc10bca08',
    name: 'Mamie Larkin',
    username: 'Lon',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg',
    isFollowing: true,
  },
  {
    id: '6d43793d-29d1-4581-b71c-2d4b9310f414',
    name: 'Eric Brown',
    username: 'Jayde',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1224.jpg',
    isFollowing: true,
  },
  {
    id: 'ff3dbd7d-68b5-4757-acaf-d820262305c0',
    name: 'Johanna Gibson',
    username: 'Bailee',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/367.jpg',
    isFollowing: true,
  },
  {
    id: '4e5d8f81-399f-47b6-9856-98ae824af593',
    name: 'Richard West',
    username: 'Clyde',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/500.jpg',
    isFollowing: true,
  },
  {
    id: 'f81e210f-8f8a-4584-bf31-6ec6520dfff4',
    name: 'Mrs. Ed Streich',
    username: 'Lera',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/853.jpg',
    isFollowing: false,
  },
  {
    id: '755daa80-1a14-416e-b979-703b730e5256',
    name: 'Camille Kiehn',
    username: 'Cristian',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/461.jpg',
    isFollowing: true,
  },
  {
    id: '673c1310-9c77-4a1b-87be-255b603f0ddd',
    name: 'Dr. Gretchen Hammes',
    username: 'Bo',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1025.jpg',
    isFollowing: false,
  },
  {
    id: '37cf7a1d-1d57-4088-8f66-4b97b6cabc49',
    name: 'Marvin Ryan PhD',
    username: 'Alfreda',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/795.jpg',
    isFollowing: true,
  },
  {
    id: '1eb835f0-659f-4753-bd0b-6d1ced51ada9',
    name: 'Thelma Runolfsdottir',
    username: 'Hipolito',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1233.jpg',
    isFollowing: true,
  },
  {
    id: 'a259ee4a-bdb2-463d-823e-7dc7fee4bf60',
    name: 'Evelyn Heathcote',
    username: 'Jefferey',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg',
    isFollowing: true,
  },
  {
    id: 'e9ccf23d-462a-4745-882b-13a35c4c5c13',
    name: 'Sylvia Emmerich',
    username: 'Korey',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/327.jpg',
    isFollowing: true,
  },
  {
    id: '93281733-16ab-4407-adaf-4bcd2d3ccbfe',
    name: 'Pat Tremblay',
    username: 'Floy',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/464.jpg',
    isFollowing: true,
  },
  {
    id: '5cf874af-2a24-42d0-98f8-d95808323e20',
    name: 'Carolyn Paucek',
    username: 'Kaylie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg',
    isFollowing: true,
  },
  {
    id: 'ac7fcb16-c9da-4c53-8dd9-98cd583e438d',
    name: 'Claudia Leannon',
    username: 'Sean',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/501.jpg',
    isFollowing: true,
  },
  {
    id: '12889aa1-84f9-45d4-889a-f481dbc49ae0',
    name: 'Anne Schulist',
    username: 'Dannie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1146.jpg',
    isFollowing: true,
  },
  {
    id: 'afab1a8b-e827-49ac-9176-dd34c3722986',
    name: 'Carrie Bauch Sr.',
    username: 'Lucile',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/925.jpg',
    isFollowing: true,
  },
  {
    id: 'fcfcc212-3dfc-4bbe-90f8-5cc188b70c9b',
    name: 'Darlene Wisozk IV',
    username: 'Reva',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/455.jpg',
    isFollowing: true,
  },
  {
    id: '22f148cc-24f7-4c1a-9fce-a6d907a590f6',
    name: 'Kerry Ritchie',
    username: 'Marlen',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/826.jpg',
    isFollowing: true,
  },
  {
    id: 'ac94657c-4f76-4d0d-b804-2cfca1e63fcc',
    name: 'Woodrow Goyette',
    username: 'Brett',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1191.jpg',
    isFollowing: true,
  },
  {
    id: '3155c75a-2830-4c19-844c-e789265a36ce',
    name: 'Luke Cremin',
    username: 'Damion',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/156.jpg',
    isFollowing: true,
  },
  {
    id: '34518b98-a6c0-4c7c-a7c8-82e61792e89d',
    name: 'Lee Stanton',
    username: 'Halle',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg',
    isFollowing: true,
  },
  {
    id: '060db843-f820-4bf2-8506-78825cbf995c',
    name: 'Bobbie Botsford',
    username: 'Sadye',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/923.jpg',
    isFollowing: true,
  },
  {
    id: 'cc3eeb6e-0860-41f1-8e62-e2354a0f2487',
    name: 'Kenny Weissnat Sr.',
    username: 'Marcelle',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/550.jpg',
    isFollowing: true,
  },
  {
    id: 'e0119248-d1f8-4690-905e-a4e993fab64f',
    name: 'Elvira Nienow',
    username: 'Elvis',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/439.jpg',
    isFollowing: true,
  },
  {
    id: '1f9b0c17-5450-41b1-b077-7d33fa47f7d3',
    name: 'Mrs. Rita Considine',
    username: 'Jeremie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg',
    isFollowing: false,
  },
  {
    id: '5b609d3d-3d6a-4543-a6a4-1cb2c0751032',
    name: 'Stuart Shanahan',
    username: 'Abner',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/49.jpg',
    isFollowing: false,
  },
  {
    id: '6f21aff3-b0bd-471f-9e46-b2e3da869560',
    name: 'Stacy Gleichner',
    username: 'Vilma',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/668.jpg',
    isFollowing: true,
  },
  {
    id: 'c07f0192-62c7-4288-8df4-40a683fc078d',
    name: 'Diana Stark I',
    username: 'Norbert',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/73.jpg',
    isFollowing: false,
  },
  {
    id: '86db1a41-6272-488c-95e7-b856d8f14b8d',
    name: 'Philip Stoltenberg',
    username: 'Lourdes',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/172.jpg',
    isFollowing: true,
  },
  {
    id: '4fa54e82-4f2e-4688-89d7-81d37f20b825',
    name: 'Myrtle Kertzmann',
    username: 'Jennie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg',
    isFollowing: true,
  },
  {
    id: '8dc56e8a-294c-41b8-ac6c-72fcbd88a041',
    name: 'Justin Rau',
    username: 'Kianna',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1187.jpg',
    isFollowing: true,
  },
  {
    id: '76a08944-cb89-4e3c-8436-80946611dda5',
    name: 'Frederick Halvorson',
    username: 'Daija',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/263.jpg',
    isFollowing: true,
  },
  {
    id: '3924076c-a7ee-43dc-88fe-128d3603ac4c',
    name: 'Lester Pagac',
    username: 'Keara',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1245.jpg',
    isFollowing: true,
  },
  {
    id: '1d88d057-46ab-4c65-bdaf-edfcbfbc2714',
    name: 'Sherman Ziemann',
    username: 'Marian',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/705.jpg',
    isFollowing: true,
  },
  {
    id: '68905839-3599-4262-8ab8-fb0b63dd89d0',
    name: 'Mrs. Danielle Lind',
    username: 'Judge',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/135.jpg',
    isFollowing: true,
  },
  {
    id: '973e56e0-c478-4ab7-84fa-77595afd0621',
    name: 'Delores Murphy',
    username: 'Mabelle',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1019.jpg',
    isFollowing: true,
  },
  {
    id: 'b59932d1-a1ae-4440-96b3-4777930e3081',
    name: 'Hattie Kuhic Jr.',
    username: 'Howard',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1170.jpg',
    isFollowing: true,
  },
  {
    id: '3182d9a8-a194-485f-a386-12fa095c1846',
    name: 'Mr. Bonnie Cormier',
    username: 'Nikki',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg',
    isFollowing: true,
  },
  {
    id: '1693c5ce-d455-4e60-93b4-912c6783d9b0',
    name: 'Jessie Bosco',
    username: 'Pink',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg',
    isFollowing: true,
  },
  {
    id: '21b429da-e4bd-4cd4-96a7-390a935206db',
    name: 'Miss Marian Predovic',
    username: 'Jordi',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg',
    isFollowing: true,
  },
  {
    id: 'c7062acf-7adc-4d80-a9cc-36f775d7841a',
    name: 'Cody Rath',
    username: 'Khalid',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/959.jpg',
    isFollowing: true,
  },
  {
    id: '645f7eae-dbf1-4566-9f55-44661385c7bd',
    name: 'Joe Schroeder',
    username: 'Jameson',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/84.jpg',
    isFollowing: true,
  },
  {
    id: '7a22321d-c234-4068-9b4c-412994eddc16',
    name: 'Cary Keeling',
    username: 'Pierre',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg',
    isFollowing: true,
  },
  {
    id: '7d328107-6258-4d1d-ae85-601c0c8722d2',
    name: 'Dr. Jessica Gutkowski',
    username: 'Roderick',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/266.jpg',
    isFollowing: true,
  },
  {
    id: 'f2f3db62-36dd-403c-9e19-248b51db0ce8',
    name: 'Janice Hodkiewicz',
    username: 'Jessie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/493.jpg',
    isFollowing: true,
  },
  {
    id: '34b2b630-916f-41ef-823b-221db2677755',
    name: 'Faith Nitzsche',
    username: 'Arnaldo',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/66.jpg',
    isFollowing: true,
  },
  {
    id: '01a0bce2-66ef-42d7-ace0-80ee6152b884',
    name: 'Mildred Lebsack',
    username: 'Lamont',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/80.jpg',
    isFollowing: true,
  },
  {
    id: '1a77e90b-47a5-470b-88b6-2b0c669ecc0b',
    name: 'Douglas Hermiston Sr.',
    username: 'Audreanne',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/846.jpg',
    isFollowing: true,
  },
  {
    id: '11bb0670-5944-4c98-8944-bfbad9e1c9a4',
    name: 'Camille Price',
    username: 'Mateo',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/163.jpg',
    isFollowing: true,
  },
  {
    id: '88d637a0-81a1-424d-aca2-055b48dbbb16',
    name: 'Pearl Hirthe',
    username: 'Fletcher',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1062.jpg',
    isFollowing: true,
  },
  {
    id: '5dad15c5-640f-490c-bdd0-719d5e834c2e',
    name: 'Tonya Koelpin',
    username: 'Mose',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/364.jpg',
    isFollowing: true,
  },
  {
    id: '3f2e3a5f-aa94-45ec-8e04-4371bd3a78a5',
    name: 'Warren Zemlak',
    username: 'Rachel',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/530.jpg',
    isFollowing: true,
  },
  {
    id: '87c09cfe-6246-4510-a6ed-974950334aa4',
    name: 'Clarence Abernathy',
    username: 'Leonie',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg',
    isFollowing: true,
  },
  {
    id: '2278c666-449d-44d9-9df4-e225adf972e8',
    name: 'Minnie Abbott',
    username: 'Alvena',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/675.jpg',
    isFollowing: true,
  },
  {
    id: '72a424f5-4da5-4462-ab07-6f592979a9f3',
    name: 'Sylvia Altenwerth',
    username: 'Gerardo',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/275.jpg',
    isFollowing: true,
  },
  {
    id: 'f1878082-6f54-485d-8028-8bbf5e9f131d',
    name: 'Celia Bernier V',
    username: 'Alba',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
    isFollowing: true,
  },
  {
    id: '809d25df-35e6-4ffd-b5d8-29f3c371c470',
    name: 'Amanda Huels',
    username: 'Dena',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/416.jpg',
    isFollowing: true,
  },
];

export default users;
