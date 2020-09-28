use async_graphql::{MergedObject, Object};
use rusoto_dynamodb::{DynamoDb, PutItemInput};
use uuid::Uuid;

use crate::dynamodb::types as dynamo;
use crate::global::DYNAMODB_CLIENT;
use crate::graphql::types::*;

#[derive(Default)]
pub struct ActorsMutation;

#[Object]
impl ActorsMutation {
    // FIXME: Return Result<Actor> instead.
    #[field(desc = "Returns the sum of a and b")]
    async fn add_actor(&self, name: String, movie: String) -> Actor {
        Actor { name, movie }
    }
}

#[derive(Default)]
pub struct MovieMutation;

#[Object]
impl MovieMutation {
    // FIXME: Return Result<Movie> instead.
    #[field(desc = "Return a list of all movies")]
    async fn add_movie(&self, name: String, year: u16) -> Movie {
        let movie_item = dynamo::Movie {
            pk: "movie".to_string(),
            sk: Uuid::new_v4(),
            name: name.clone(),
            year,
        }
        .into();
        let movie_input: PutItemInput = PutItemInput {
            table_name: "slsRustTest".to_string(),
            item: movie_item,
            ..Default::default()
        };

        match DYNAMODB_CLIENT.put_item(movie_input).await {
            Ok(output) => {
                println!("Output: {:?}", output);
                Movie { name, year }
            }
            Err(error) => {
                println!("Error: {:?}", error);
                Movie { name, year }
            }
        }
    }
}

#[MergedObject]
#[derive(Default)]
pub struct MutationRoot(ActorsMutation, MovieMutation);
