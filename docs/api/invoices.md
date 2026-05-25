# Invoices API



> **BREAKING CHANGE (v2):** The `amount_cents` field has been replaced with
> `amount` (in major units, e.g., dollars) and `amount_minor` (in minor units, e.g., cents).
> The `amount_cents` field will be removed entirely in v3.

## List invoices

`GET /v2/invoices`

Returns a paginated list of invoices for the authenticated account.

### Query parameters

- `limit` (integer, default 50, max 100)
- `starting_after` (string) — cursor for pagination
- `status` (string) — filter by status: `draft`, `open`, `paid`, `void`

### Response

```json
{
  "data": [
    {
      "id": "in_abc123",
      "amount": 15.00,
      "amount_minor": 1500,
      "currency": "usd",
      "status": "paid",
      "created_at": "2026-01-15T10:00:00Z"
    }
  ],
  "has_more": false
}
```

## Get invoice

`GET /v2/invoices/{id}`

Returns a single invoice by ID.

## Add modifications
