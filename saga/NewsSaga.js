import {call, put, takeEvery} from 'redux-saga/effects'
import { Fetch_Failed, Fetch_Started, Fetch_Success } from './Newsaction';

async function apicall(){
    let newsdata=[];
    const apifetch=await fetch("https://api.currentsapi.services/v1/latest-news?apiKey=gdSzEp8s8JDofBPNn94I1LJaAuovrM4MPEoOm8hW-4itxKK2");
    const json = await apifetch.json();
    const data= await json.news;
    return data;
}
function* fetchnewsData(){
    console.log("fetchdata");
    yield put(Fetch_Started());
    let data=yield call(apicall);
    yield put(Fetch_Success(data));

}
export function* watchNews(){
    console.log('hello');
    yield takeEvery('Fetch_Data',fetchnewsData);
}