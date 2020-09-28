use lambda::{handler_fn, Context};
use serde_json::{json, Value};

pub type Error = Box<dyn std::error::Error + Send + Sync + 'static>;

#[tokio::main]
async fn main() -> Result<(), Error> {
    // Attach our own handler function to the lambda rust runtime, and run it.
    let runtime_handler = handler_fn(handler);
    lambda::run(runtime_handler).await?;
    Ok(())
}

/// Our handler processes the Lambda events and returns the response as JSON.
pub async fn handler(event: Value, _: Context) -> Result<Value, Error> {
    let first_name = event["firstName"].as_str().unwrap_or("world");

    Ok(json!({ "message": format!("Hello, {}!", first_name) }))
}
