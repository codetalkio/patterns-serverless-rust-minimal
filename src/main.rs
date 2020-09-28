use lambda::handler_fn;

mod dynamodb;
mod global;
mod graphql;
mod handler;
mod types;

use crate::handler::handler;
use crate::types::Error;

#[tokio::main]
async fn main() -> Result<(), Error> {
    // Attach our own handler function to the lambda rust runtime, and run it.
    let runtime_handler = handler_fn(handler);
    lambda::run(runtime_handler).await?;
    Ok(())
}
