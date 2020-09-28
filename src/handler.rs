use lambda::Context;
use serde_json::Value;

use crate::global::SCHEMA;
use crate::types::Error;

pub async fn handler(event: Value, _: Context) -> Result<Value, Error> {
    let query = event["query"].as_str().unwrap_or("{}");
    let data = SCHEMA.execute(query).await?.data;
    Ok(data)
}
