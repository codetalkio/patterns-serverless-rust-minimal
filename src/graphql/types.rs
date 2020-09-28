use async_graphql::SimpleObject;
use serde::Serialize;

#[SimpleObject]
#[derive(Serialize)]
pub struct Actor {
    pub name: String,
    pub movie: String,
}

#[SimpleObject]
#[derive(Serialize)]
pub struct Movie {
    pub name: String,
    pub year: u16,
}
