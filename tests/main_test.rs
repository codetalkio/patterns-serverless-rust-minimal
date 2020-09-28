use lambda::Context;
use serde_json::json;

use sls_rust_minimal::main::*;

#[tokio::test]
async fn handler_handles_basic_event() {
    let event = json!({
        "firstName": "Earth"
    });
    let expected = json!({
        "message": "Hello, Earth!"
    });
    let result = handler(event.clone(), Context::default())
        .await
        .expect("expected Ok(_) value");
    assert_eq!(result, expected)
}
