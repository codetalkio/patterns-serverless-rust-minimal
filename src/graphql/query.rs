use async_graphql::{MergedObject, Object};
use rusoto_dynamodb::{DynamoDb, ListTablesInput};

use crate::graphql::types::*;

#[derive(Default)]
pub struct ActorsQuery;

#[Object]
impl ActorsQuery {
    #[field(desc = "Return a list of actors.")]
    async fn actors(&self) -> Vec<Actor> {
        vec![Actor {
            name: "John".to_string(),
            movie: "Bill and Ted".to_string(),
        }]
    }
}

#[derive(Default)]
pub struct MovieQuery;

#[Object]
impl MovieQuery {
    #[field(desc = "Return a list of all movies.")]
    async fn movies(&self) -> Vec<Movie> {
        vec![Movie {
            name: "Bill and Ted".to_string(),
            year: 1989
        }]
    }
}

#[MergedObject]
#[derive(Default)]
pub struct QueryRoot(ActorsQuery, MovieQuery);
