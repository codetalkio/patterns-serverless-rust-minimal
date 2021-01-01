use lambda::Context;
use serde_json::{json, Value};

pub type LambdaError = Box<dyn std::error::Error + Send + Sync + 'static>;

/// Our handler processes the Lambda events and returns the response as JSON.
pub async fn handler(event: Value, _: Context) -> Result<Value, LambdaError> {
    let first_name = event["firstName"].as_str().unwrap_or("world");

    Ok(json!({ "message": format!("Hello, {}!", first_name) }))
}
