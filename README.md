# Transcript

Apply file schema to another file, preserving the values.

Supports **JSON** and **YAML**.

Given two files, **BASE** and **TARGET**, generates a **OUTPUT** file with

All keys from the **BASE** file that does not exists on the **TARGET**, with the **BASE** values.
All keys that exists on both, with the values of the **TARGET**.
None keys from the **TARGET** that does not exists on the **BASE**.

## Running

```bash
node transcript.js [format] [base] [target] [output]
```

## Tools

```bash
node smartling_unflatten_json.js [file] [output]
```
