function getDataSet(element){
	if(element.dataset){
		return element.dataset;
	}
	else{
		var attribute=element.attributes;
		var name=[];
		var value=[];
		var obj={};
		for(var i=0;i<attribute.length;i++){
			if(attribute[i].nodeName.slice(0,5)==="data-"){
				name.push(attribute[i].nodeName.slice(5));
				value.push(attribute[i].nodeValue);
			}
		}
		for(var i=0;i<attribute.length;i++){
			obj[name[i]]=value[i];
		}
		return obj;
	}
}