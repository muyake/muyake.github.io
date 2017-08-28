ts = [
  {id: 100, name: '草莓'},
    {id: 101, name: '柚子'},
      {id: 102, name: '李子'}
      ];
      for (let fruit of fruits) {
        let message = `ID: ${fruit.id} Name: ${fruit.name}`;
	  console.log(message);
	  }
	  console.log(`List total: ${fruits.length}`);
