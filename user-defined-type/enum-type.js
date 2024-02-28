// enum tpes: numeric , string , hetergenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 0] = "ReadData";
    RequestType[RequestType["SaveData"] = 1] = "SaveData";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
