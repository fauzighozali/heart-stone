class Api {
    static  xRapidApiKey    =   "f6ac8225e4msh8f944ff6076f92dp145022jsn652029195bbd";
    static  xRapidApiHost   =   "omgvamp-hearthstone-v1.p.rapidapi.com";
    static  baseUrl         =   "https://omgvamp-hearthstone-v1.p.rapidapi.com/";

    static optionHeader = {
        headers: {
            'X-RapidAPI-Host'   : this.xRapidApiHost,
            'X-RapidAPI-Key'    : this.xRapidApiKey
        }
    }

    static getInfo      =   this.baseUrl+"info";
    static getAllCards  =   this.baseUrl+"cards";
    static getCardBacks =   this.baseUrl+"cardbacks";

    static getSingleCards   =   (name)      => Api.baseUrl+"cards/"+name;
    static getCardSets      =   (set)       => Api.baseUrl+"cards/sets/"+set;
    static getCardByClass   =   (classes)   => Api.baseUrl+"class/"+classes;
    static getCardByRace    =   (race)      => Api.baseUrl+"races/"+race;
    static getCardByQuality =   (quality)   => Api.baseUrl+"quality/"+quality;
    static getCardByType    =   (type)      => Api.baseUrl+"types/"+type;
    static getCardByFaction =   (faction)   => Api.baseUrl+"factions/"+faction;
    static getCardBySearch  =   (search)    => Api.baseUrl+"search/"+search;
}

export default Api;