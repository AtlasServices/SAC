
var str = Excel_Upload_1.getUnit();
var str1 = str.split("},{");
var entity = "";

var Ar_col_1 = ArrayUtils.create(Type.string);
var Ar_col_2 = ArrayUtils.create(Type.string);
var Ar_col_3 = ArrayUtils.create(Type.string);
var Ar_col_4 = ArrayUtils.create(Type.string);
var Ar_col_5 = ArrayUtils.create(Type.string);
var Ar_col_6 = ArrayUtils.create(Type.string);
var Ar_col_7 = ArrayUtils.create(Type.string);
var Ar_col_8 = ArrayUtils.create(Type.string);
var Ar_col_9 = ArrayUtils.create(Type.string);

// Parse Custom Widet JSON to  arrays
for(var x=0; x<str1.length; x++) {
	var str2 = str1[x].split(",");	

	for(var y = 0; y<str2.length; y++) {
		entity = str2[y].replace("[{", "");
		entity = str2[y].replace("}]", "");
	
		if(y === 1) {
			Ar_col_1.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 2) {
			Ar_col_2.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 3) {
			Ar_col_3.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 4) {
			Ar_col_4.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 5) {
			Ar_col_5.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 6) {
			Ar_col_6.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 7) {
			Ar_col_7.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 8) {
			Ar_col_8.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
		if(y === 9) {
			Ar_col_9.push(entity.split(":")[1].replace('"','').replace('"',''));
		}
	}	
}

// Adjusting table filters based on upload file
for(x=0; x<Table_1.getDimensionsOnRows().length; x++) {
	console.log(Table_1.getDimensionsOnRows()[x]);
	if(x === 0) { 
		for(y=0; y<Ar_col_1.length; y++){
			Ar_col_1[y] = "[SAP_CEP_ACCOUNT].[parentId].&[" + Ar_col_1[y] + "]";
		}
		Table_1.getDataSource().setDimensionFilter(Table_1.getDimensionsOnRows()[x], {values: Ar_col_1});
		console.log(Ar_col_1);
	}
	if(x === 1) { Table_1.getDataSource().setDimensionFilter(Table_1.getDimensionsOnRows()[x], {values: Ar_col_2}); console.log(Ar_col_2);}
	if(x === 2) { Table_1.getDataSource().setDimensionFilter(Table_1.getDimensionsOnRows()[x], {values: Ar_col_3}); console.log(Ar_col_3);}
	if(x === 3) { Table_1.getDataSource().setDimensionFilter(Table_1.getDimensionsOnRows()[x], {values: Ar_col_4}); console.log(Ar_col_4);}
	if(x === 4) { Table_1.getDataSource().setDimensionFilter(Table_1.getDimensionsOnRows()[x], {values: Ar_col_5}); console.log(Ar_col_5);}
	if(x === 5) { Table_1.getDataSource().setDimensionFilter(Table_1.getDimensionsOnRows()[x], {values: Ar_col_6}); console.log(Ar_col_6);}
	if(x === 6) { Table_1.getDataSource().setDimensionFilter(Table_1.getDimensionsOnRows()[x], {values: Ar_col_7}); console.log(Ar_col_7);}
}

// Making inputs
var selection = {};
for(x=0; x<Ar_col_1.length; x++) {
	for(y=0; y<Table_1.getDimensionsOnRows().length; y++){
		if(y === 0) {selection[Table_1.getDimensionsOnRows()[y]] = Ar_col_1[x];}
		if(y === 1) {selection[Table_1.getDimensionsOnRows()[y]] = Ar_col_2[x];}
		if(y === 2) {selection[Table_1.getDimensionsOnRows()[y]] = Ar_col_3[x];}
		if(y === 3) {selection[Table_1.getDimensionsOnRows()[y]] = Ar_col_4[x];}
		if(y === 4) {selection[Table_1.getDimensionsOnRows()[y]] = Ar_col_5[x];}
		if(y === 5) {selection[Table_1.getDimensionsOnRows()[y]] = Ar_col_6[x];}
		if(y === 6) {selection[Table_1.getDimensionsOnRows()[y]] = Ar_col_7[x];}
	}
	console.log(selection);
	Table_1.getPlanning().setUserInput(selection,Ar_col_8[x]);
}
Table_1.getPlanning().submitData();

